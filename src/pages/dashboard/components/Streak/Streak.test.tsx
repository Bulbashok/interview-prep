import { render, screen } from '@testing-library/react';
import Streak from './Streak';
import { i18nKeys } from '@/i18n/i18n-keys';
import { mockI18n } from '@/test/mocks';

const streaks = {
  current: 5,
  best: 10,
};

const renderStreak = () => {
  return render(<Streak currentStreak={streaks.current} bestStreak={streaks.best} />);
};

mockI18n();

describe('Dashboard Streak', () => {
  test('render', () => {
    renderStreak();
  });

  test('correct texts in component', () => {
    renderStreak();

    expect(
      screen.getByText((content) => content.includes(i18nKeys.dashboard.streak.current)),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(i18nKeys.dashboard.streak.best)),
    ).toBeInTheDocument();
  });

  test('check correct streaks values', () => {
    renderStreak();

    expect(
      screen.getByText((content) => content.includes(String(streaks.current))),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(String(streaks.best))),
    ).toBeInTheDocument();
  });
});
