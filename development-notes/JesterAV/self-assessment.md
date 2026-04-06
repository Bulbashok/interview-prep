# Self-Assessement: JesterAV

PR: https://github.com/Bulbashok/interview-prep/pull/87

## Реализованные фичи (Итого: 155 баллов):

- My Components:
  - Widget Engine (+25 баллов) - [#32](https://github.com/Bulbashok/interview-prep/pull/32),[#60](https://github.com/Bulbashok/interview-prep/pull/60)
  - Dashboard (+20 баллов) - [#47](https://github.com/Bulbashok/interview-prep/pull/47)
  - Async Sorter (+25 баллов) - [Async Sorter](https://github.com/Bulbashok/interview-prep/tree/main/src/widgets/AsyncSorter)
- UI & Interaction:
  - Drag & Drop (+10 баллов): Реализовано в виджете [Async Sorter](https://github.com/Bulbashok/interview-prep/tree/main/src/widgets/AsyncSorter). Выполнено с использованием библиотек @dnd-kit/core и @dnd-kit/sortable
  - Theme Switcher (+10 баллов) - [#75](https://github.com/Bulbashok/interview-prep/pull/75)
  - i18n (+20 баллов): реализована локализация на двух языках — русском и английском - [26](https://github.com/Bulbashok/interview-prep/pull/26)
  - Responsive (+5 баллов): Выполнена адаптация вёрстки своих компонентов под мобильные устройства (от 320px)
- Quality:
  - Unit tests (Basic) (+10)
- Design Patterns (+10 баллов)
- API Layer (+10 баллов)
- Frameworks:
  - В разработке использовали React (+10 баллов)

## Описание моей работы:

Я разработал виджет Async Sorter с поддержкой Drag & Drop, где нужно перетаскивать блоки кода в правильном порядке их выполнения в event loop, тренируя понимание асинхронности в JS. Также создал Dashboard. Реализовал i18n для двух языков (русский/английский), Theme Switcher и страницу 404. В работе использовался стек: React + TS + Vite

## Личные Feature Components:

- ### Async Sorter

Сложный виджет с использованием Drag & Drop

- ### Widget Render

Компонент который рендерит виджеты получая данные от API. Определяет виджет по полю type

- ### i18n

Локализация на двух языках - английский и русский
