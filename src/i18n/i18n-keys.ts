export const i18nKeys = {
  logintBtnText: 'loginBtnText',
  logoutBtnText: 'logoutBtnText',

  header: {
    login: 'header.login',
    logout: 'header.logout',
    profile: 'header.profile',
  },

  404: {
    title: '404.title',
    subtitle: '404.subtitle',
    backButton: '404.backButton',
    homePageButton: '404.homePageButton',
    pageTitle: '404.pageTitle',
    pageDescription: '404.pageDescription',
  },

  homePage: {
    loginBtn: 'homePage.loginBtn',
    description: 'homePage.description',
    registrationBtn: 'homePage.registrationBtn',
    aboutUs: 'homePage.aboutUs',
  },

  register: {
    title: 'register.title',
    loginLink: 'register.loginLink',
    loginButton: 'register.loginButton',
    displayNameLabel: 'register.displayNameLabel',
    emailLabel: 'register.emailLabel',
    passwordLabel: 'register.passwordLabel',
    confirmPasswordLabel: 'register.confirmPasswordLabel',
    submitButton: 'register.submitButton',
    submitButtonLoading: 'register.submitButtonLoading',
    redirecting: 'register.redirecting',
    backButton: 'register.backButton',
  },

  registerErrors: {
    passwordsMismatch: 'registerErrors.passwordsMismatch',
    passwordMinLength: 'registerErrors.passwordMinLength',
    registrationError: 'registerErrors.registrationError',
    emailAlreadyInUse: 'registerErrors.emailAlreadyInUse',
    weakPassword: 'registerErrors.weakPassword',
    invalidEmail: 'registerErrors.invalidEmail',
  },

  login: {
    title: 'login.title',
    registerLink: 'login.registerLink',
    registerButton: 'login.registerButton',
    emailLabel: 'login.emailLabel',
    passwordLabel: 'login.passwordLabel',
    submitButton: 'login.submitButton',
    submitButtonLoading: 'login.submitButtonLoading',
    redirecting: 'login.redirecting',
    backButton: 'login.backButton',
  },

  loginErrors: {
    invalidCredentials: 'loginErrors.invalidCredentials',
    userNotFound: 'loginErrors.userNotFound',
    invalidEmail: 'loginErrors.invalidEmail',
    loginError: 'loginErrors.loginError',
  },

  dashboard: {
    logoutBtn: 'dashboard.logoutBtn',
    empty: {
      title: 'dashboard.empty.title',
      message: 'dashboard.empty.message',
    },
    titles: {
      progress: 'dashboard.titles.progress',
      xp: 'dashboard.titles.xp',
      streak: 'dashboard.titles.streak',
      history: 'dashboard.titles.history',
      navigation: 'dashboard.titles.navigation',
    },
    experience: 'dashboard.experience',
    buttons: {
      library: 'dashboard.buttons.library',
      profile: 'dashboard.buttons.profile',
    },
    streak: {
      current: 'dashboard.streak.current',
      best: 'dashboard.streak.best',
    },
  },

  profile: {
    title: 'profile.title',
    subtitle: 'profile.subtitle',
    description: 'profile.description',
    loading: 'profile.loading',
    homeButton: 'profile.homeButton',
  },
  widgetRender: {
    button: 'widgetRender.button',
  },
  library: {
    title: {
      title: 'library.title.title',
    },
    search: {
      placeholder: 'library.search.placeholder',
    },
    levels: {
      title: 'library.levels.title',
      all: 'library.levels.all',
    },
    select: {
      title: 'library.select.title',
      all: 'library.select.all',
    },
  },

  asyncSorter: {
    question: 'asyncSorter.question',
    instruction: 'asyncSorter.instruction',
    code: 'asyncSorter.code',
    btn: 'asyncSorter.btn',
    result: 'asyncSorter.result',
    avaibleBlocks: 'asyncSorter.avaibleBlocks',
  },
} as const;
