import { arrayUnion } from 'firebase/firestore';
import { getUserData } from './getUserData';
import { firestoreService } from '@/services/firestore';

export const updateProgress = async (topicId: string): Promise<void> => {
  try {
    const userData = await getUserData();

    if (!userData) {
      throw new Error('Fetch user data failed');
    }

    if (userData.completeTopics.includes(topicId)) return;

    const allTopics = (await firestoreService.getCollection('topics')).length;

    await firestoreService.updateDocument('users', userData.uid, {
      completeTopics: arrayUnion(topicId),
      progress: Math.floor(((userData.completeTopics.length + 1) / allTopics) * 100),
    });
  } catch (error) {
    console.error(error);
  }
};
