import { render, screen } from '@testing-library/react';
import { mockI18n } from '@/test/mocks';
import Experience from './Experience';
import { i18nKeys } from '@/i18n/i18n-keys';

mockI18n();

const experienceProps = {
  current: 7,
};

const renderExperience = () => {
  return render(<Experience currentExperience={experienceProps.current} />);
};

describe('Dashboard Experience component', () => {
  test('render', () => {
    renderExperience();
  });

  test('correct text in component', () => {
    renderExperience();

    expect(
      screen.getByText((content) => content.includes(i18nKeys.dashboard.experience)),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(String(experienceProps.current))),
    ).toBeInTheDocument();
  });
});
