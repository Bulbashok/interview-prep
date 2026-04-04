import { auth } from '@/config/firebase';
import { firestoreService } from '@/services/firestore';
import { UserData } from '@/types/firebase';

export const getUserData = async (): Promise<UserData | null> => {
  const currentUser = auth.currentUser;

  if (!currentUser) return null;

  try {
    const userData = await firestoreService.getDocument<UserData>('users', currentUser.uid);

    return userData;
  } catch {
    return null;
  }
};
