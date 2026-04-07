import { auth } from '@/config/firebase';
import { firestoreService } from '@/services/firestore';
import { HistoryRecordProps } from '@/types/dashboard';
import { UserData } from '@/types/firebase';
import { arrayRemove, arrayUnion } from 'firebase/firestore';

export const createHistoryRecord = async (
  topicName: string,
  currentProgress: number,
  allQuestions: number,
): Promise<void> => {
  try {
    const userId = auth.currentUser?.uid;

    if (!userId) return;

    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;

    const userDoc: UserData | null = await firestoreService.getDocument('users', userId);

    if (!userDoc) return;

    const record: HistoryRecordProps = {
      subject: topicName,
      doneQuestions: currentProgress,
      allQuestions: allQuestions,
      date: formattedDate,
    };

    const existingRecord = userDoc.history.find(
      (record) =>
        record.subject === topicName &&
        record.date === formattedDate &&
        record.doneQuestions === currentProgress,
    );

    if (existingRecord) {
      await firestoreService.updateDocument('users', userId, {
        history: arrayRemove(existingRecord),
      });
    }

    await firestoreService.updateDocument('users', userId, {
      history: arrayUnion(record),
    });
  } catch (error) {
    console.error('Failed to create history record:', error);
  }
};
