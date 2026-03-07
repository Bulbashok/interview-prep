import { useState, useEffect, useCallback } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  User,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';
import { UserData, SignUpData, SignInData } from '@/types/firebase';

const createUserData = (user: User, displayName: string | null): UserData => ({
  uid: user.uid,
  email: user.email,
  displayName,
  photoURL: user.photoURL,
  createdAt: new Date(),
  updatedAt: new Date(),
});

const saveUserToFirestore = async (user: User, userData: UserData) => {
  await setDoc(doc(db, 'users', user.uid), {
    ...userData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

interface UseFirebaseAuthReturn {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  signUp: (data: SignUpData) => Promise<void>;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const useAuthState = (
  fetchUserData: (uid: string) => Promise<void>,
): {
  user: User | null;
  loading: boolean;
} => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchUserData(currentUser.uid);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [fetchUserData]);

  return { user, loading };
};

const useAuthActions = (user: User | null, fetchUserData: (uid: string) => Promise<void>) => {
  const signUp = async ({ email, password, displayName }: SignUpData) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }

    const userData = createUserData(userCredential.user, displayName || null);
    await saveUserToFirestore(userCredential.user, userData);
  };

  const signIn = async ({ email, password }: SignInData) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const refreshUserData = async () => {
    if (user) {
      await fetchUserData(user.uid);
    }
  };

  return { signUp, signIn, signOut, refreshUserData };
};

export const useFirebaseAuth = (): UseFirebaseAuthReturn => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const fetchUserData = useCallback(async (uid: string) => {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const data = userDocSnap.data();
      setUserData({
        uid: data.uid,
        email: data.email,
        displayName: data.displayName,
        photoURL: data.photoURL,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      });
    }
  }, []);

  const { user, loading } = useAuthState(fetchUserData);
  const { signUp, signIn, signOut, refreshUserData } = useAuthActions(user, fetchUserData);

  return {
    user,
    userData,
    loading,
    signUp,
    signIn,
    signOut,
    refreshUserData,
  };
};
