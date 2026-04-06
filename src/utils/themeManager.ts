export const themeManager = {
  key: 'theme',
  defaultTheme: 'light',

  getTheme: function (): string {
    return localStorage.getItem(themeManager.key) || themeManager.defaultTheme;
  },

  setTheme: function (theme: string): void {
    localStorage.setItem(this.key, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },
};
