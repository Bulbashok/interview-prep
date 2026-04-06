import { auth } from '@/config/firebase';
import { firestoreService } from '@/services/firestore';
import { AsyncSorterSubmitData } from '@/types/asyncSorter';

export const submitSolution = async (
  solution: AsyncSorterSubmitData,
  id: string,
): Promise<boolean> => {
  if (!auth.currentUser) {
    console.log('Ошибка авторизации');
  }

  const solutionId = `${id}_${auth.currentUser?.uid}_${Date.now()}`;

  try {
    await firestoreService.setDocument('users_answers', solutionId, solution);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
