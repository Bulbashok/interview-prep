import { onCall, HttpsError } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';

interface AsyncSorterAnswerData {
  callstack: string[];
  microtasks: string[];
  macrotasks: string[];
  outputOrder: string[];
}

interface ValidateRequest {
  taskId: string;
  userAnswer: AsyncSorterAnswerData;
  lang: 'ru' | 'en';
}

interface ValidateResponse {
  success: boolean;
  message: string;
  errors: string[];
}

const checkOutputOrder = (userArr: string[], correctArr: string[]): boolean => {
  if (userArr.length !== correctArr.length) return false;
  return userArr.every((item, index) => item === correctArr[index]);
};

const checkQueues = (userArr: string[], correctArr: string[]): boolean => {
  if (userArr.length !== correctArr.length) return false;

  const sorted1 = [...userArr].sort();
  const sorted2 = [...correctArr].sort();

  return sorted1.every((item, index) => item === sorted2[index]);
};

export const validateAsyncSorter = onCall<ValidateRequest, Promise<ValidateResponse>>(
  async (request) => {
    try {
      const { userAnswer, taskId, lang } = request.data;

      if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Please login to submit answers');
      }

      if (!taskId || !userAnswer) {
        throw new HttpsError('invalid-argument', 'Missing required fields');
      }

      const [taskDoc, messageDoc] = await Promise.all([
        admin.firestore().collection('correct_answers').doc(taskId).get(),
        admin.firestore().collection('messages').doc(`async-sorter-result-messages_${lang}`).get(),
      ]);

      const correctAnswer = taskDoc.data();
      const messageData = messageDoc.data();

      if (!correctAnswer) {
        throw new HttpsError('not-found', `Task ${taskId} not found`);
      }

      if (!messageData) {
        throw new HttpsError('not-found', `Messages for ${lang} not found`);
      }

      const isCallstackCorrect = checkQueues(userAnswer.callstack, correctAnswer.callstack),
        isMicrotasksCorrect = checkQueues(userAnswer.microtasks, correctAnswer.microtasks),
        isMacrotasksCorrect = checkQueues(userAnswer.macrotasks, correctAnswer.macrotasks),
        isOutputOrderCorrect = checkOutputOrder(userAnswer.outputOrder, correctAnswer.outputOrder),
        allCorrect =
          isCallstackCorrect && isMicrotasksCorrect && isMacrotasksCorrect && isOutputOrderCorrect;

      const errors: string[] = [];

      if (!isCallstackCorrect) errors.push(messageData?.callstack);
      if (!isMicrotasksCorrect) errors.push(messageData?.microtasks);
      if (!isMacrotasksCorrect) errors.push(messageData?.macrotasks);
      if (!isOutputOrderCorrect) errors.push(messageData?.outputOrder);

      return {
        success: allCorrect,
        message: allCorrect ? messageData?.success : messageData?.failure,
        errors: errors,
      };
    } catch (error) {
      const lang = request.data?.lang === 'ru' ? 'ru' : 'en';

      if (error instanceof HttpsError) throw error;

      throw new HttpsError(
        'internal',
        lang === 'ru'
          ? 'Произошла ошибка при проверке ответа'
          : 'An error occurred while validating your answer',
      );
    }
  },
);
