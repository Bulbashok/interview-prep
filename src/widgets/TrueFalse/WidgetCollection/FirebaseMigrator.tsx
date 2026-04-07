// import { firestoreService } from '@/services/firestore';
// import { correctAnswers } from './CorrectAnswer';
// // import { TRUE_FALSE_WIDGETS } from './WidgetCollection';

// // export const uploadDataToFirebase = async () => {
// //   try {
// //     console.log('🚀 Начинаю загрузку виджетов в Firebase...');

// //     for (const widget of TRUE_FALSE_WIDGETS) {
// //       // Используем id виджета (например, 'tf-eventloop-004') как имя документа
// //       const docId = widget.id;

// //       // Записываем объект целиком (включая поле id)
// //       await firestoreService.setDocument('widgets', docId, widget);

// //       console.log(`✅ Виджет "${docId}" успешно загружен`);
// //     }

// //     alert('Все виджеты успешно перенесены в коллекцию "widgets"!');
// //   } catch (error) {
// //     console.error('❌ Ошибка при миграции виджетов:', error);
// //     alert('Ошибка при загрузке. Проверь консоль.');
// //   }
// // };

// export const uploadCorrectAnswers = async () => {
//   try {
//     console.log('🚀 Начинаю загрузку правильных ответов...');

//     for (const answer of correctAnswers) {
//       const docId = answer.id; // Например, 'tf-classes-004'

//       const data = {
//         value: answer.value, // Внутри документа будет только поле value
//       };

//       await firestoreService.setDocument('correct_answers', docId, data);

//       console.log(`✅ Ответ для "${docId}" загружен`);
//     }

//     alert('Все правильные ответы успешно перенесены в correct_answers!');
//   } catch (error) {
//     console.error('❌ Ошибка при загрузке ответов:', error);
//   }
// };
