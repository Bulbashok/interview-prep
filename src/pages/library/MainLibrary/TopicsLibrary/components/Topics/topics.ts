interface Topic {
  title: { ru: string; en: string };
  description: {
    ru: string;
    en: string;
  };
  tags: string[];
  difficulty: number;
  widgetIds: string[];
  order: number;
}

export const TOPICS: Topic[] = [
  {
    title: { ru: 'Event Loop', en: 'Event Loop' },
    description: {
      ru: 'Разбор макрозадач, микрозадач и стека вызовов на практике.',
      en: 'Understanding macrotasks, microtasks, and the call stack in practice.',
    },
    tags: ['async', 'event-loop', 'runtime'],
    difficulty: 3,
    widgetIds: ['quiz-event-loop', 'tf-event-loop', 'sorter-event-loop'],
    order: 1,
  },
  {
    title: { ru: 'Замыкания', en: 'Closures' },
    description: {
      ru: 'Как функции запоминают свое окружение и где это применять.',
      en: 'How functions remember their environment and where to use it.',
    },
    tags: ['closures', 'scope', 'functions'],
    difficulty: 2,
    widgetIds: ['quiz-closures', 'tf-closures', 'sorter-closures'],
    order: 2,
  },
  {
    title: { ru: 'Прототипы', en: 'Prototypes' },
    description: {
      ru: 'Наследование, цепочка прототипов и свойство __proto__.',
      en: 'Inheritance, prototype chain, and the __proto__ property.',
    },
    tags: ['oop', 'prototypes', 'objects'],
    difficulty: 2,
    widgetIds: ['quiz-prototypes', 'tf-prototypes', 'sorter-prototypes'],
    order: 3,
  },
  {
    title: { ru: 'Массивы и Объекты', en: 'Arrays & Objects' },
    description: {
      ru: 'Методы перебора массивов и манипуляции со структурами данных.',
      en: 'Array iteration methods and data structure manipulations.',
    },
    tags: ['arrays', 'methods', 'basics'],
    difficulty: 1,
    widgetIds: ['quiz-arrays', 'tf-arrays', 'sorter-arrays'],
    order: 4,
  },
  {
    title: { ru: 'Async/Await & Promises', en: 'Async/Await & Promises' },
    description: {
      ru: 'Работа с асинхронным кодом, обработка ошибок и промисификация.',
      en: 'Working with asynchronous code, error handling, and promisification.',
    },
    tags: ['promises', 'async-await', 'async'],
    difficulty: 3,
    widgetIds: ['quiz-async', 'tf-async', 'sorter-async'],
    order: 5,
  },
  {
    title: { ru: 'Основы алгоритмов', en: 'Algorithm Basics' },
    description: {
      ru: 'Сортировки, поиск и оценка сложности Big O.',
      en: 'Sorting, searching, and Big O complexity estimation.',
    },
    tags: ['algorithms', 'sorting', 'cs'],
    difficulty: 2,
    widgetIds: ['quiz-algorithms', 'tf-algorithms', 'sorter-algorithms'],
    order: 6,
  },
  {
    title: { ru: 'Context (this)', en: 'Context (this)' },
    description: {
      ru: 'Разница между call, apply, bind и контекст стрелочных функций.',
      en: 'Differences between call, apply, bind, and arrow function context.',
    },
    tags: ['this', 'functions', 'context'],
    difficulty: 2,
    widgetIds: ['quiz-this', 'tf-this', 'sorter-this'],
    order: 7,
  },
  {
    title: { ru: 'ES6+ Features', en: 'ES6+ Features' },
    description: {
      ru: 'Деструктуризация, Spread/Rest операторы и новые методы строк.',
      en: 'Destructuring, Spread/Rest operators, and new string methods.',
    },
    tags: ['es6', 'syntax', 'modern-js'],
    difficulty: 1,
    widgetIds: ['quiz-es6', 'tf-es6', 'sorter-es6'],
    order: 8,
  },
  {
    title: { ru: 'Типы данных и приведение', en: 'Types & Coercion' },
    description: {
      ru: 'Сравнение == vs ===, неявное приведение типов и Symbol.',
      en: 'Comparison == vs ===, implicit type coercion, and Symbols.',
    },
    tags: ['types', 'basics', 'coercion'],
    difficulty: 2,
    widgetIds: ['quiz-types', 'tf-types', 'sorter-types'],
    order: 9,
  },
  {
    title: { ru: 'Модули (ESM vs CJS)', en: 'Modules (ESM vs CJS)' },
    description: {
      ru: 'Разница между import/export и require/module.exports.',
      en: 'Differences between import/export and require/module.exports.',
    },
    tags: ['modules', 'architecture', 'npm'],
    difficulty: 2,
    widgetIds: ['quiz-modules', 'tf-modules', 'sorter-modules'],
    order: 10,
  },
  {
    title: { ru: 'DOM API & Events', en: 'DOM API & Events' },
    description: {
      ru: 'Всплытие и погружение событий, делегирование и манипуляции.',
      en: 'Event bubbling and capturing, delegation, and DOM manipulation.',
    },
    tags: ['dom', 'browser', 'events'],
    difficulty: 1,
    widgetIds: ['quiz-dom', 'tf-dom', 'sorter-dom'],
    order: 11,
  },
  {
    title: { ru: 'LocalStorage & Cookies', en: 'Storage API' },
    description: {
      ru: 'Хранение данных в браузере: лимиты, безопасность и сроки жизни.',
      en: 'Browser data storage: limits, security, and expiration.',
    },
    tags: ['storage', 'browser', 'security'],
    difficulty: 1,
    widgetIds: ['quiz-storage', 'tf-storage', 'sorter-storage'],
    order: 12,
  },
  {
    title: { ru: 'Regular Expressions', en: 'Regular Expressions' },
    description: {
      ru: 'Основы регулярных выражений: флаги, группы и квантификаторы.',
      en: 'RegExp basics: flags, groups, and quantifiers.',
    },
    tags: ['regex', 'strings', 'parsing'],
    difficulty: 3,
    widgetIds: ['quiz-regex', 'tf-regex', 'sorter-regex'],
    order: 13,
  },
  {
    title: { ru: 'Error Handling', en: 'Error Handling' },
    description: {
      ru: 'Конструкция try/catch/finally и кастомные объекты ошибок.',
      en: 'Try/catch/finally construction and custom error objects.',
    },
    tags: ['errors', 'logic', 'debug'],
    difficulty: 2,
    widgetIds: ['quiz-errors', 'tf-errors', 'sorter-errors'],
    order: 14,
  },
  {
    title: { ru: 'Garbage Collection', en: 'Garbage Collection' },
    description: {
      ru: 'Как работает управление памятью и что такое утечки памяти.',
      en: 'How memory management works and what memory leaks are.',
    },
    tags: ['memory', 'performance', 'v8'],
    difficulty: 3,
    widgetIds: ['quiz-memory', 'tf-memory', 'sorter-memory'],
    order: 15,
  },
  {
    title: { ru: 'Web API: Fetch & XHR', en: 'Web API: Fetch & XHR' },
    description: {
      ru: 'Запросы к серверу, обработка заголовков и форматов данных.',
      en: 'Server requests, handling headers, and data formats.',
    },
    tags: ['network', 'fetch', 'api'],
    difficulty: 2,
    widgetIds: ['quiz-network', 'tf-network', 'sorter-network'],
    order: 16,
  },
  {
    title: { ru: 'Strict Mode', en: 'Strict Mode' },
    description: {
      ru: 'Зачем нужен "use strict" и какие ограничения он накладывает.',
      en: 'Why use "use strict" and what restrictions it imposes.',
    },
    tags: ['strict-mode', 'syntax', 'best-practices'],
    difficulty: 1,
    widgetIds: ['quiz-strict', 'tf-strict', 'sorter-strict'],
    order: 17,
  },
  {
    title: { ru: 'Classes (ES6)', en: 'Classes (ES6)' },
    description: {
      ru: 'Синтаксический сахар над прототипами: static, private и super.',
      en: 'Syntactic sugar over prototypes: static, private, and super.',
    },
    tags: ['classes', 'oop', 'modern-js'],
    difficulty: 2,
    widgetIds: ['quiz-classes', 'tf-classes', 'sorter-classes'],
    order: 18,
  },
];
