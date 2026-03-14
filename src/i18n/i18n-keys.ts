export const i18nKeys = {
  langBtn: 'langBtn',

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

  dashboard: {
    logoutBtn: 'dashboard.logoutBtn',
    titles: {
      progress: 'dashboard.titles.progressTitle',
      streak: 'dashboard.titles.streakTitle',
      history: 'dashboard.titles.historyTitile',
      xp: 'dashboard.titles.xp',
      navigation: 'dashboard.titles.navigation',
    },
    experience: 'dashboard.experience',
    streak: {
      current: 'dashboard.streak.current',
      best: 'dashboard.streak.best',
    },
    buttons: {
      library: 'dashboard.buttons.library',
      profile: 'dashboard.buttons.profile',
    },
    empty: {
      title: 'dashboard.empty.title',
      message: 'dashboard.empty.message',
    },
  },
} as const;
