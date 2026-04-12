# Self-Assessment — bulbashok

## Таблица фич

| Категория        | Фича                                  | Баллы   | Ссылки на код                                                                                                                      |
| ---------------- | ------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| My Components    | Login/Register Pages (Rich UI Screen) | +20     | [src/pages/login/](../../src/pages/login/), [src/pages/register/](../../src/pages/register/)                                       |
| My Components    | Quiz Widget (Complex Component)       | +25     | [src/widgets/Quiz/](../../src/widgets/Quiz/)                                                                                       |
| Backend & Data   | BaaS Auth (Firebase Auth)             | +15     | [src/config/firebase.ts](../../src/config/firebase.ts), [src/hooks/useFirebaseAuth.ts](../../src/hooks/useFirebaseAuth.ts)         |
| Backend & Data   | BaaS CRUD (Firebase Firestore)        | +15     | [src/services/firestore.ts](../../src/services/firestore.ts)                                                                       |
| UI & Interaction | i18n (RU/EN)                          | +10     | [src/i18n/](../../src/i18n/)                                                                                                       |
| UI & Interaction | Theme Switcher (Dark/Light)           | +10     | [src/utils/themeManager.ts](../../src/utils/themeManager.ts), [src/components/ThemeSwitcher/](../../src/components/ThemeSwitcher/) |
| UI & Interaction | Responsive (от 320px)                 | +5      | [src/styles/](../../src/styles/)                                                                                                   |
| Architecture     | API Layer                             | +10     | [src/api/](../../src/api/)                                                                                                         |
| Frameworks       | React                                 | +5      |                                                                                                                                    |
| **ИТОГО**        |                                       | **115** |                                                                                                                                    |

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
- Firestore: `getDocument`, `setDocument`, `updateDocument`, `deleteDocument`, `queryCollection`

**Файлы**: `src/config/firebase.ts`, `src/hooks/useFirebaseAuth.ts`, `src/services/firestore.ts`

### 4. i18n — 10 баллов

Локализация на 2 языка (RU/EN).

- Конфигурация i18next + react-i18next
- Файлы переводов `en.json` / `ru.json`
- Объект `i18nKeys` с типизацией ключей
- Переключатель языка в Header
- Сохранение языка в localStorage

**Файлы**: `src/i18n/i18n.ts`, `src/i18n/i18n-keys.ts`, `src/i18n/locales/en.json`, `ru.json`

### 5. Theme Switcher — 10 баллов

Переключение тёмной и светлой темы.

- `themeManager.ts` — утилиты get/set theme
- `variables.css` — 30+ CSS-переменных для обеих тем
- Компонент ThemeSwitcher с иконками
- Сохранение в localStorage

**Файлы**: `src/utils/themeManager.ts`, `src/styles/variables.css`, `src/components/ThemeSwitcher/ThemeSwitcher.tsx`

### 6. Responsive — 5 баллов

Адаптация вёрстки под мобильные устройства.

- Burger menu для навигации
- Media queries для login/register, profile, dashboard, quiz
- Breakpoints: 370px–1090px

**Файлы**: `src/styles/`, `src/pages/login/login.scss`, `src/pages/register/register.scss`

### 7. API Layer — 10 баллов

Изолированный слой работы с Firestore.

- `getUserData.ts` — данные пользователя
- `createHistoryRecord.ts` — записи истории
- `updateExp.ts` — обновление XP
- `updateProgress.ts` — прогресс по темам
- `streakCounter.ts` — серия дней
- `submitSolution.ts` — отправка ответов

**Файлы**: `src/api/` — 6 файлов

## Итого

| Категория        | Баллы   |
| ---------------- | ------- |
| My Components    | 45      |
| Backend & Data   | 30      |
| UI & Interaction | 25      |
| Architecture     | 10      |
| Frameworks       | 5       |
| **Всего**        | **115** |

**Без штрафов**: TypeScript ✅, strict: true ✅
