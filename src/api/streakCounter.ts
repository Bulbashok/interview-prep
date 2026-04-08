import { firestoreService } from '@/services/firestore';
import { getUserData } from './getUserData';
import { UserData } from '@/types/firebase';

interface getStreakDataResponse {
  userData: UserData;
  diffDays: number;
}

const getStreakData = async (): Promise<getStreakDataResponse> => {
  const userData = await getUserData();

  if (!userData) {
    throw new Error('Failed fetch user data');
  }

  const lastActivityDay = new Date(userData.updatedAt);
  const today = new Date();

  lastActivityDay.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - lastActivityDay.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return {
    userData: userData,
    diffDays: diffDays,
  };
};

export const resetStreak = async (): Promise<boolean> => {
  try {
    const { userData, diffDays } = await getStreakData();

    if (diffDays > 1) {
      await firestoreService.updateDocument('users', userData.uid, {
        streak: {
          current: 0,
          best: userData.streak.best,
        },
        updatedAt: new Date(),
      });

      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateStreak = async (): Promise<void> => {
  try {
    const { userData, diffDays } = await getStreakData();

    if (diffDays === 0) return;

    if (diffDays === 1) {
      const newStreak = userData.streak.current + 1;
      const newBestStreak = Math.max(newStreak, userData.streak.best);

      await firestoreService.updateDocument('users', userData.uid, {
        streak: {
          current: newStreak,
          best: newBestStreak,
        },
        updatedAt: new Date(),
      });
    }
  } catch (error) {
    console.error(error);
  }
};
