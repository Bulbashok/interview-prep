// import { firestoreService } from '../../../../services/firestore';
// import { TOPICS } from './topics';

// export const uploadTopics = async () => {
//   try {
//     console.log('Начинаю загрузку...');

//     for (const topic of TOPICS) {
//       const docId = topic.title.en
//         .toLowerCase()
//         .replace(/\//g, '-') // Заменяем слэш / на тире -
//         .replace(/&/g, 'and') // Заменяем & на слово and
//         .replace(/\s+/g, '-') // Заменяем пробелы на тире
//         .replace(/[^\w-]/g, ''); // Удаляем всё, что не буквы, цифры или тире

//       await firestoreService.setDocument('topics', docId, topic);

//       console.log(` Тема "${topic.title.en}" загружена`);
//     }

//     alert('Все темы успешно перенесены в Firebase!');
//   } catch (error) {
//     console.error('Ошибка миграции:', error);
//   }
// };
