export const i18nKeys = {
  langBtn: 'langBtn',

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
  },

  loginErrors: {
    invalidCredentials: 'loginErrors.invalidCredentials',
    userNotFound: 'loginErrors.userNotFound',
    invalidEmail: 'loginErrors.invalidEmail',
    loginError: 'loginErrors.loginError',
  },
} as const;
