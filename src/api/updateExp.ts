import { auth } from '@/config/firebase';
import { firestoreService } from '@/services/firestore';
import { increment } from 'firebase/firestore';

export const updateExp = async (): Promise<void> => {
  try {
    const userId = auth.currentUser?.uid;

    if (!userId) return;

    await firestoreService.updateDocument('users', userId, {
      currentExp: increment(10),
    });
  } catch (error) {
    console.error('Failed to update user experience', error);
  }
};
