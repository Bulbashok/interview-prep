// import { Widget } from '../../../types/widgets';

// export const TRUE_FALSE_WIDGETS: Widget[] = [
//   // Event Loop - difficulty 3
//   {
//     id: 'tf-eventloop-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['event-loop', 'async', 'runtime'],
//     payload: {
//       statement: {
//         ru: 'Микротаски выполняются до рендеринга следующего кадра',
//         en: 'Microtasks execute before rendering the next frame',
//       },
//       explanation: {
//         ru: 'Event Loop сначала обрабатывает все микротаски в очереди, затем переходит к рендерингу',
//         en: 'Event Loop processes all microtasks in the queue first, then moves to rendering',
//       },
//     },
//   },
//   {
//     id: 'tf-eventloop-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['event-loop', 'async', 'runtime'],
//     payload: {
//       statement: {
//         ru: 'setTimeout с задержкой 0ms выполняется синхронно',
//         en: 'setTimeout with 0ms delay executes synchronously',
//       },
//       explanation: {
//         ru: 'setTimeout всегда асинхронный, даже с задержкой 0ms - попадает в очередь макротасок',
//         en: 'setTimeout is always asynchronous, even with 0ms delay - goes to macrotask queue',
//       },
//     },
//   },
//   {
//     id: 'tf-eventloop-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['event-loop', 'async', 'runtime'],
//     payload: {
//       statement: {
//         ru: 'Promise.resolve() выполняется до setTimeout',
//         en: 'Promise.resolve() executes before setTimeout',
//       },
//       explanation: {
//         ru: 'Promise.resolve() создает микротаску, setTimeout - макротаску. Микротаски выполняются первыми',
//         en: 'Promise.resolve() creates microtask, setTimeout - macrotask. Microtasks execute first',
//       },
//     },
//   },

//   // Closures - difficulty 2
//   {
//     id: 'tf-closures-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['closures', 'scope', 'functions'],
//     payload: {
//       statement: {
//         ru: 'Замыкание запоминает значения переменных, а не ссылки',
//         en: 'Closure remembers variable values, not references',
//       },
//       explanation: {
//         ru: 'Замыкание запоминает ссылки на переменные, поэтому изменения видны внутри',
//         en: 'Closure remembers references to variables, so changes are visible inside',
//       },
//     },
//   },
//   {
//     id: 'tf-closures-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['closures', 'scope', 'functions'],
//     payload: {
//       statement: {
//         ru: 'Стрелочные функции создают свое собственное this',
//         en: 'Arrow functions create their own this',
//       },
//       explanation: {
//         ru: 'Стрелочные функции не создают свой this, а захватывают его из внешнего контекста',
//         en: "Arrow functions don't create their own this, they capture it from outer context",
//       },
//     },
//   },
//   {
//     id: 'tf-closures-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['closures', 'scope', 'functions'],
//     payload: {
//       statement: {
//         ru: 'IIFE (Immediately Invoked Function Expression) создает новую область видимости',
//         en: 'IIFE creates a new scope',
//       },
//       explanation: {
//         ru: 'IIFE создает новую область видимости для переменных, изолируя их от глобального контекста',
//         en: 'IIFE creates new scope for variables, isolating them from global context',
//       },
//     },
//   },

//   // Prototypes - difficulty 2
//   {
//     id: 'tf-prototypes-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['oop', 'prototypes', 'objects'],
//     payload: {
//       statement: {
//         ru: 'Все объекты наследуются от Object.prototype',
//         en: 'All objects inherit from Object.prototype',
//       },
//       explanation: {
//         ru: 'Объекты созданные через Object.create(null) не имеют прототипа',
//         en: "Objects created with Object.create(null) don't have a prototype",
//       },
//     },
//   },
//   {
//     id: 'tf-prototypes-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['oop', 'prototypes', 'objects'],
//     payload: {
//       statement: {
//         ru: '__proto__ - это стандартное свойство для доступа к прототипу',
//         en: '__proto__ is a standard property for prototype access',
//       },
//       explanation: {
//         ru: '__proto__ устарел, следует использовать Object.getPrototypeOf()',
//         en: '__proto__ is deprecated, should use Object.getPrototypeOf()',
//       },
//     },
//   },
//   {
//     id: 'tf-prototypes-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['oop', 'prototypes', 'objects'],
//     payload: {
//       statement: {
//         ru: 'Методы добавленные в прототип разделяются между всеми экземплярами',
//         en: 'Methods added to prototype are shared between all instances',
//       },
//       explanation: {
//         ru: 'Прототип позволяет экономить память - методы хранятся один раз для всех экземпляров',
//         en: 'Prototype saves memory - methods stored once for all instances',
//       },
//     },
//   },

//   // Arrays & Objects - difficulty 1
//   {
//     id: 'tf-arrays-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['arrays', 'methods', 'basics'],
//     payload: {
//       statement: {
//         ru: 'Array.isArray([]) возвращает false',
//         en: 'Array.isArray([]) returns false',
//       },
//       explanation: {
//         ru: 'Array.isArray([]) возвращает true для массивов',
//         en: 'Array.isArray([]) returns true for arrays',
//       },
//     },
//   },
//   {
//     id: 'tf-arrays-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['arrays', 'methods', 'basics'],
//     payload: {
//       statement: {
//         ru: 'Object.keys() возвращает ключи в порядке их добавления',
//         en: 'Object.keys() returns keys in order they were added',
//       },
//       explanation: {
//         ru: 'Object.keys() возвращает ключи в порядке их добавления для обычных объектов',
//         en: 'Object.keys() returns keys in insertion order for plain objects',
//       },
//     },
//   },
//   {
//     id: 'tf-arrays-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['arrays', 'methods', 'basics'],
//     payload: {
//       statement: {
//         ru: 'delete удаляет элемент из массива полностью',
//         en: 'delete removes element from array completely',
//       },
//       explanation: {
//         ru: 'delete удаляет значение, но оставляет empty slot. Используйте splice()',
//         en: 'delete removes value but leaves empty slot. Use splice()',
//       },
//     },
//   },

//   // Async/Await & Promises - difficulty 3
//   {
//     id: 'tf-async-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['promises', 'async-await', 'async'],
//     payload: {
//       statement: {
//         ru: 'Promise.all() возвращает результаты в порядке завершения промисов',
//         en: 'Promise.all() returns results in order of completion',
//       },
//       explanation: {
//         ru: 'Promise.all() сохраняет порядок входного массива, независимо от времени выполнения',
//         en: 'Promise.all() preserves input array order, regardless of completion time',
//       },
//     },
//   },
//   {
//     id: 'tf-async-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['promises', 'async-await', 'async'],
//     payload: {
//       statement: {
//         ru: 'await можно использовать только внутри async функции',
//         en: 'await can only be used inside async function',
//       },
//       explanation: {
//         ru: 'await работает только в async функциях или на верхнем уровне модуля',
//         en: 'await only works in async functions or top-level module',
//       },
//     },
//   },
//   {
//     id: 'tf-async-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['promises', 'async-await', 'async'],
//     payload: {
//       statement: {
//         ru: 'Promise.reject() можно поймать в .then()',
//         en: 'Promise.reject() can be caught in .then()',
//       },
//       explanation: {
//         ru: 'Promise.reject() можно поймать только в .catch() или во втором аргументе .then()',
//         en: 'Promise.reject() can only be caught in .catch() or second argument of .then()',
//       },
//     },
//   },

//   // Algorithm Basics - difficulty 2
//   {
//     id: 'tf-algo-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['algorithms', 'sorting', 'cs'],
//     payload: {
//       statement: {
//         ru: 'Bubble sort имеет сложность O(n log n)',
//         en: 'Bubble sort has O(n log n) complexity',
//       },
//       explanation: {
//         ru: 'Bubble sort имеет сложность O(n²) в худшем и среднем случаях',
//         en: 'Bubble sort has O(n²) complexity in worst and average cases',
//       },
//     },
//   },
//   {
//     id: 'tf-algo-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['algorithms', 'sorting', 'cs'],
//     payload: {
//       statement: {
//         ru: 'Binary search работает только на отсортированных массивах',
//         en: 'Binary search only works on sorted arrays',
//       },
//       explanation: {
//         ru: 'Binary search требует отсортированный массив для корректной работы',
//         en: 'Binary search requires sorted array for correct operation',
//       },
//     },
//   },
//   {
//     id: 'tf-algo-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['algorithms', 'sorting', 'cs'],
//     payload: {
//       statement: {
//         ru: 'HashMap поиск имеет сложность O(1)',
//         en: 'HashMap lookup has O(1) complexity',
//       },
//       explanation: {
//         ru: 'HashMap обеспечивает среднюю сложность O(1) для операций поиска',
//         en: 'HashMap provides average O(1) complexity for lookup operations',
//       },
//     },
//   },

//   // Context (this) - difficulty 2
//   {
//     id: 'tf-this-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['this', 'functions', 'context'],
//     payload: {
//       statement: {
//         ru: 'В стрелочной функции this определяется в момент вызова',
//         en: 'Arrow function this is determined at call time',
//       },
//       explanation: {
//         ru: 'В стрелочных функциях this определяется лексически, захватывается из внешнего контекста',
//         en: 'Arrow function this is determined lexically, captured from outer context',
//       },
//     },
//   },
//   {
//     id: 'tf-this-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['this', 'functions', 'context'],
//     payload: {
//       statement: {
//         ru: 'bind() вызывает функцию немедленно',
//         en: 'bind() calls function immediately',
//       },
//       explanation: {
//         ru: 'bind() возвращает новую функцию с привязанным контекстом, но не вызывает её',
//         en: "bind() returns new function with bound context but doesn't call it",
//       },
//     },
//   },
//   {
//     id: 'tf-this-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['this', 'functions', 'context'],
//     payload: {
//       statement: {
//         ru: 'В методе объекта this всегда указывает на сам объект',
//         en: 'In object method this always points to the object',
//       },
//       explanation: {
//         ru: 'this зависит от способа вызова функции, не от того где она определена',
//         en: "this depends on how function is called, not where it's defined",
//       },
//     },
//   },

//   // ES6+ Features - difficulty 1
//   {
//     id: 'tf-es6-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['es6', 'syntax', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'const переменную можно переопределить',
//         en: 'const variable can be redefined',
//       },
//       explanation: {
//         ru: 'const переменную нельзя переопределить, но можно изменить свойства объекта или массива',
//         en: 'const variable cannot be redefined, but object/array properties can be changed',
//       },
//     },
//   },
//   {
//     id: 'tf-es6-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['es6', 'syntax', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'Spread оператор работает с объектами',
//         en: 'Spread operator works with objects',
//       },
//       explanation: {
//         ru: 'Spread оператор ... работает с массивами и объектами (ES2018+)',
//         en: 'Spread operator ... works with arrays and objects (ES2018+)',
//       },
//     },
//   },
//   {
//     id: 'tf-es6-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['es6', 'syntax', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'Template literals используют одинарные кавычки',
//         en: 'Template literals use single quotes',
//       },
//       explanation: {
//         ru: 'Template literals используют обратные кавычки ` ` `',
//         en: 'Template literals use backticks ` `',
//       },
//     },
//   },

//   // Types & Coercion - difficulty 2
//   {
//     id: 'tf-types-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['types', 'basics', 'coercion'],
//     payload: {
//       statement: {
//         ru: 'null == undefined возвращает false',
//         en: 'null == undefined returns false',
//       },
//       explanation: {
//         ru: 'null == undefined возвращает true (абстрактное равенство)',
//         en: 'null == undefined returns true (abstract equality)',
//       },
//     },
//   },
//   {
//     id: 'tf-types-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['types', 'basics', 'coercion'],
//     payload: {
//       statement: {
//         ru: 'NaN === NaN возвращает true',
//         en: 'NaN === NaN returns true',
//       },
//       explanation: {
//         ru: 'NaN не равен ничему, включая себя. Используйте isNaN()',
//         en: 'NaN is not equal to anything, including itself. Use isNaN()',
//       },
//     },
//   },
//   {
//     id: 'tf-types-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['types', 'basics', 'coercion'],
//     payload: {
//       statement: {
//         ru: '[] + {} возвращает строку',
//         en: '[] + {} returns string',
//       },
//       explanation: {
//         ru: "[] преобразуется в '', {} в '[object Object]' → '[object Object]'",
//         en: "[] converts to '', {} to '[object Object]' → '[object Object]'",
//       },
//     },
//   },

//   // Modules - difficulty 2
//   {
//     id: 'tf-modules-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['modules', 'architecture', 'npm'],
//     payload: {
//       statement: {
//         ru: 'ES6 модули работают в Node.js без флага',
//         en: 'ES6 modules work in Node.js without flag',
//       },
//       explanation: {
//         ru: 'ES6 модули требуют .mjs расширение или "type": "module" в package.json',
//         en: 'ES6 modules require .mjs extension or "type": "module" in package.json',
//       },
//     },
//   },
//   {
//     id: 'tf-modules-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['modules', 'architecture', 'npm'],
//     payload: {
//       statement: {
//         ru: 'require можно использовать условно',
//         en: 'require can be used conditionally',
//       },
//       explanation: {
//         ru: 'require можно использовать внутри if/else, import - только на верхнем уровне',
//         en: 'require can be used inside if/else, import - only at top level',
//       },
//     },
//   },
//   {
//     id: 'tf-modules-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['modules', 'architecture', 'npm'],
//     payload: {
//       statement: {
//         ru: 'export default можно импортировать с любым именем',
//         en: 'export default can be imported with any name',
//       },
//       explanation: {
//         ru: 'export default позволяет импортировать с любым именем при импорте',
//         en: 'export default allows importing with any name during import',
//       },
//     },
//   },

//   // DOM API & Events - difficulty 1
//   {
//     id: 'tf-dom-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['dom', 'browser', 'events'],
//     payload: {
//       statement: {
//         ru: 'addEventListener можно добавить несколько обработчиков на один элемент',
//         en: 'addEventListener can add multiple handlers to one element',
//       },
//       explanation: {
//         ru: 'addEventListener поддерживает несколько обработчиков для одного события',
//         en: 'addEventListener supports multiple handlers for same event',
//       },
//     },
//   },
//   {
//     id: 'tf-dom-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['dom', 'browser', 'events'],
//     payload: {
//       statement: {
//         ru: 'event.stopPropagation() останавливает только всплытие',
//         en: 'event.stopPropagation() only stops bubbling',
//       },
//       explanation: {
//         ru: 'stopPropagation() останавливает всплытие, stopImmediatePropagation() и другие обработчики',
//         en: 'stopPropagation() stops bubbling, stopImmediatePropagation() and other handlers',
//       },
//     },
//   },
//   {
//     id: 'tf-dom-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['dom', 'browser', 'events'],
//     payload: {
//       statement: {
//         ru: 'document.createElement() сразу добавляет элемент в DOM',
//         en: 'document.createElement() immediately adds element to DOM',
//       },
//       explanation: {
//         ru: 'createElement() создает элемент в памяти, appendChild() добавляет в DOM',
//         en: 'createElement() creates element in memory, appendChild() adds to DOM',
//       },
//     },
//   },

//   // Storage API - difficulty 1
//   {
//     id: 'tf-storage-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['storage', 'browser', 'security'],
//     payload: {
//       statement: {
//         ru: 'localStorage работает между разными доменами',
//         en: 'localStorage works between different domains',
//       },
//       explanation: {
//         ru: 'localStorage изолирован для каждого домена (same-origin policy)',
//         en: 'localStorage is isolated for each domain (same-origin policy)',
//       },
//     },
//   },
//   {
//     id: 'tf-storage-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['storage', 'browser', 'security'],
//     payload: {
//       statement: {
//         ru: 'localStorage хранит только строки',
//         en: 'localStorage only stores strings',
//       },
//       explanation: {
//         ru: 'localStorage автоматически преобразует все значения в строки',
//         en: 'localStorage automatically converts all values to strings',
//       },
//     },
//   },
//   {
//     id: 'tf-storage-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['storage', 'browser', 'security'],
//     payload: {
//       statement: {
//         ru: 'sessionStorage сохраняется после закрытия вкладки',
//         en: 'sessionStorage persists after tab close',
//       },
//       explanation: {
//         ru: 'sessionStorage очищается при закрытии вкладки или браузера',
//         en: 'sessionStorage clears when tab or browser closes',
//       },
//     },
//   },

//   // Regular Expressions - difficulty 3
//   {
//     id: 'tf-regex-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['regex', 'strings', 'parsing'],
//     payload: {
//       statement: {
//         ru: "Регулярное выражение /a+/ найдет 'aa'",
//         en: "Regex /a+/ will find 'aa'",
//       },
//       explanation: {
//         ru: "+ означает один или больше символов 'a', поэтому 'aa' будет найдено",
//         en: "+ means one or more 'a' characters, so 'aa' will be found",
//       },
//     },
//   },
//   {
//     id: 'tf-regex-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['regex', 'strings', 'parsing'],
//     payload: {
//       statement: {
//         ru: '\\d соответствует любой цифре',
//         en: '\\d matches any digit',
//       },
//       explanation: {
//         ru: '\\d - сокращение для [0-9], соответствует любой цифре',
//         en: '\\d is shorthand for [0-9], matches any digit',
//       },
//     },
//   },
//   {
//     id: 'tf-regex-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['regex', 'strings', 'parsing'],
//     payload: {
//       statement: {
//         ru: 'Флаг g делает поиск глобальным',
//         en: 'Flag g makes search global',
//       },
//       explanation: {
//         ru: 'Флаг g ищет все вхождения, без флага - только первое',
//         en: 'Flag g finds all occurrences, without flag - only first',
//       },
//     },
//   },

//   // Error Handling - difficulty 2
//   {
//     id: 'tf-errors-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['errors', 'logic', 'debug'],
//     payload: {
//       statement: {
//         ru: 'finally блок выполняется всегда',
//         en: 'finally block always executes',
//       },
//       explanation: {
//         ru: 'finally выполняется независимо от того, было исключение или нет',
//         en: 'finally executes regardless of whether exception occurred or not',
//       },
//     },
//   },
//   {
//     id: 'tf-errors-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['errors', 'logic', 'debug'],
//     payload: {
//       statement: {
//         ru: 'throw можно бросать только объекты Error',
//         en: 'throw can only throw Error objects',
//       },
//       explanation: {
//         ru: 'throw можно бросить любое значение, но рекомендуется Error объекты',
//         en: 'throw can throw any value, but Error objects are recommended',
//       },
//     },
//   },
//   {
//     id: 'tf-errors-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['errors', 'logic', 'debug'],
//     payload: {
//       statement: {
//         ru: 'catch блок обязателен после try',
//         en: 'catch block is required after try',
//       },
//       explanation: {
//         ru: 'try может быть с finally без catch, но не наоборот',
//         en: 'try can be with finally without catch, but not vice versa',
//       },
//     },
//   },

//   // Garbage Collection - difficulty 3
//   {
//     id: 'tf-gc-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['memory', 'performance', 'v8'],
//     payload: {
//       statement: {
//         ru: 'Утечки памяти невозможны в JavaScript',
//         en: 'Memory leaks are impossible in JavaScript',
//       },
//       explanation: {
//         ru: 'Утечки памяти возможны из-за замыканий и циклических ссылок',
//         en: 'Memory leaks are possible due to closures and circular references',
//       },
//     },
//   },
//   {
//     id: 'tf-gc-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['memory', 'performance', 'v8'],
//     payload: {
//       statement: {
//         ru: 'delete освобождает память немедленно',
//         en: 'delete frees memory immediately',
//       },
//       explanation: {
//         ru: 'delete только удаляет свойство, GC работает по своим алгоритмам',
//         en: 'delete only removes property, GC works by its own algorithms',
//       },
//     },
//   },
//   {
//     id: 'tf-gc-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 3,
//     tags: ['memory', 'performance', 'v8'],
//     payload: {
//       statement: {
//         ru: 'WeakMap позволяет использовать объекты как ключи',
//         en: 'WeakMap allows objects as keys',
//       },
//       explanation: {
//         ru: 'WeakMap позволяет использовать объекты как ключи без предотвращения GC',
//         en: 'WeakMap allows objects as keys without preventing GC',
//       },
//     },
//   },

//   // Web API: Fetch & XHR - difficulty 2
//   {
//     id: 'tf-fetch-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['network', 'fetch', 'api'],
//     payload: {
//       statement: {
//         ru: 'fetch() возвращает Promise',
//         en: 'fetch() returns Promise',
//       },
//       explanation: {
//         ru: 'fetch() асинхронный, возвращает Promise с Response объектом',
//         en: 'fetch() is asynchronous, returns Promise with Response object',
//       },
//     },
//   },
//   {
//     id: 'tf-fetch-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['network', 'fetch', 'api'],
//     payload: {
//       statement: {
//         ru: 'fetch() автоматически выбрасывает ошибку при 404',
//         en: 'fetch() automatically throws error on 404',
//       },
//       explanation: {
//         ru: 'fetch() считает 404 успешным ответом, ошибка только при проблемах сети',
//         en: 'fetch() considers 404 successful response, error only on network issues',
//       },
//     },
//   },
//   {
//     id: 'tf-fetch-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['network', 'fetch', 'api'],
//     payload: {
//       statement: {
//         ru: 'CORS работает на стороне клиента',
//         en: 'CORS works on client side',
//       },
//       explanation: {
//         ru: 'CORS настраивается на сервере через заголовки Access-Control-Allow-*',
//         en: 'CORS is configured on server via Access-Control-Allow-* headers',
//       },
//     },
//   },

//   // Strict Mode - difficulty 1
//   {
//     id: 'tf-strict-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['strict-mode', 'syntax', 'best-practices'],
//     payload: {
//       statement: {
//         ru: 'В strict mode можно создавать глобальные переменные',
//         en: 'In strict mode you can create global variables',
//       },
//       explanation: {
//         ru: 'Strict mode запрещает создание глобальных переменных через присваивание',
//         en: 'Strict mode prohibits creating global variables through assignment',
//       },
//     },
//   },
//   {
//     id: 'tf-strict-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['strict-mode', 'syntax', 'best-practices'],
//     payload: {
//       statement: {
//         ru: 'this в глобальной функции в strict mode undefined',
//         en: 'this in global function in strict mode is undefined',
//       },
//       explanation: {
//         ru: 'В strict mode this в глобальной функции не указывает на window, а undefined',
//         en: "In strict mode this in global function doesn't point to window, but undefined",
//       },
//     },
//   },
//   {
//     id: 'tf-strict-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 1,
//     tags: ['strict-mode', 'syntax', 'best-practices'],
//     payload: {
//       statement: {
//         ru: 'duplicate parameter names разрешены в strict mode',
//         en: 'duplicate parameter names are allowed in strict mode',
//       },
//       explanation: {
//         ru: 'Strict mode запрещает дублирование имен параметров в функциях',
//         en: 'Strict mode prohibits duplicate parameter names in functions',
//       },
//     },
//   },

//   // Classes (ES6) - difficulty 2
//   {
//     id: 'tf-classes-004',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['classes', 'oop', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'Методы класса автоматически привязываются к this',
//         en: 'Class methods automatically bind to this',
//       },
//       explanation: {
//         ru: 'Методы класса не привязываются к this, нужно явно привязывать или использовать стрелочные функции',
//         en: "Class methods don't bind to this, need explicit binding or arrow functions",
//       },
//     },
//   },
//   {
//     id: 'tf-classes-005',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['classes', 'oop', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'static методы доступны у экземпляров класса',
//         en: 'static methods are available on class instances',
//       },
//       explanation: {
//         ru: 'static методы доступны только на самом классе, не на экземплярах',
//         en: 'static methods are available only on the class itself, not on instances',
//       },
//     },
//   },
//   {
//     id: 'tf-classes-006',
//     type: 'true-false',
//     version: 1,
//     difficulty: 2,
//     tags: ['classes', 'oop', 'modern-js'],
//     payload: {
//       statement: {
//         ru: 'super() обязателен в конструкторе дочернего класса',
//         en: 'super() is required in child class constructor',
//       },
//       explanation: {
//         ru: 'super() обязателен если дочерний класс имеет конструктор',
//         en: 'super() is required if child class has constructor',
//       },
//     },
//   },
// ];
