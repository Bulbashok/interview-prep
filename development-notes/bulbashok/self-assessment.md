# Self-Assessment — bulbashok

## Таблица фич

| Категория      | Фича                                  | Баллы  | Ссылки на код                                                                                                              |
| -------------- | ------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| My Components  | Login/Register Pages (Rich UI Screen) | +20    | [src/pages/login](../../src/pages/login/), [src/pages/register](../../src/pages/register/)                                 |
| My Components  | Quiz Widget (Complex Component)       | +25    | [src/widgets/Quiz/](../../src/widgets/Quiz/)                                                                               |
| Backend & Data | BaaS Auth (Firebase Auth)             | +15    | [src/config/firebase.ts](../../src/config/firebase.ts), [src/hooks/useFirebaseAuth.ts](../../src/hooks/useFirebaseAuth.ts) |
| Backend & Data | BaaS CRUD (Firebase Firestore)        | +15    | [src/services/firestore.ts](../../src/services/firestore.ts)                                                               |
| Frameworks     | React                                 | +5     |                                                                                                                            |
| **ИТОГО**      |                                       | **80** |                                                                                                                            |

## Описание моей работы

Инициализировал проект (Vite + React + TS + ESLint + Prettier + Husky). Настроил Firebase (Auth + Firestore) — регистрация, логин. Написал страницы логина и регистрации с валидацией форм. Реализовал Quiz-виджет с вопросами по JS и диалогом результатов.

## Мои компоненты

### 1. Login & Register Pages — 20 баллов

Страницы входа и регистрации с Firebase Auth.

- Формы с валидацией (email, пароль, совпадение паролей)
- `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`
- Маппинг Firebase error codes на i18n-ключи
- Создание документа пользователя в Firestore (`users/{uid}`)
- Хуки `useLoginForm` и `useRegisterForm`

**Файлы**: `src/pages/login/`, `src/pages/register/`, `src/hooks/useFirebaseAuth.ts`

### 2. Quiz Widget — 25 баллов

Виджет-квиз с вопросами по JavaScript.

- Компонент Quiz с вариантами ответов
- ResultDialog для показа результатов
- quizSubmit.ts для отправки ответов
- 15 вопросов по JS (Event Loop, Closures, прототипы)

**Файлы**: `src/widgets/Quiz/Quiz.tsx`, `src/widgets/Quiz/ResultDialog.tsx`, `src/widgets/Quiz/quizSubmit.ts`

### 3. Firebase Auth + Firestore — 15 + 15 баллов

Настройка Firebase с нуля.

- Конфигурация через `.env` (без хардкода ключей)
- Authentication (email/password)
- Firestore сервис: `getDocument`, `setDocument`, `updateDocument`, `deleteDocument`, `queryCollection`

**Файлы**: `src/config/firebase.ts`, `src/hooks/useFirebaseAuth.ts`, `src/services/firestore.ts`

## Итого

| Категория      | Баллы  |
| -------------- | ------ |
| My Components  | 45     |
| Backend & Data | 30     |
| Frameworks     | 5      |
| **Всего**      | **80** |

**Без штрафов**: TypeScript ✅, strict: true ✅
