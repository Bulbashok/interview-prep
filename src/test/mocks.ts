export const mockI18n = () => {
  vi.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  }));
};
