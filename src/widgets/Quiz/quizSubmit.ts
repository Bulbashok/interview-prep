import { auth } from '@/config/firebase';
import { firestoreService } from '@/services/firestore';

export interface QuizAnswer {
  id: string;
  type: 'quiz';
  selectedOption: string;
  isCorrect: boolean;
}

export const submitQuizAnswer = async (
  widgetId: string,
  selectedOption: string,
  correctOptionIndex: number,
  options: { ru: string; en: string }[],
): Promise<boolean> => {
  if (!auth.currentUser) {
    console.error('Ошибка авторизации');
    return false;
  }

  const selectedIndex = options.findIndex(
    (opt) => opt.ru === selectedOption || opt.en === selectedOption,
  );

  const isCorrect = selectedIndex === correctOptionIndex;

  const answerId = `${widgetId}_${auth.currentUser.uid}_${Date.now()}`;

  const answer: QuizAnswer = {
    id: answerId,
    type: 'quiz',
    selectedOption,
    isCorrect,
  };

  try {
    await firestoreService.setDocument('users_answers', answerId, answer);
    return isCorrect;
  } catch (error) {
    console.error('Failed to submit quiz answer:', error);
    return false;
  }
};
