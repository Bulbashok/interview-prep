import { render, screen } from '@testing-library/react';
import DashboardEmptyState from './EmptyState';
import { mockI18n } from '@/test/mocks';
import { i18nKeys } from '@/i18n/i18n-keys';

const emptyStateProp = 'Developer';

mockI18n();

const renderEmptyState = () => {
  return render(<DashboardEmptyState name={emptyStateProp} />);
};

describe('Dashboard Empty State', () => {
  test('render', () => {
    renderEmptyState();
  });

  test('correct text in component', () => {
    renderEmptyState();

    expect(screen.getByText((content) => content.includes(emptyStateProp))).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes(i18nKeys.dashboard.empty.title)),
    ).toBeInTheDocument();
    expect(screen.getByText(i18nKeys.dashboard.empty.message)).toBeInTheDocument();

    const titleElement = screen.getByText(
      (content) =>
        content.includes(emptyStateProp) && content.includes(i18nKeys.dashboard.empty.title),
    );
    expect(titleElement).toBeInTheDocument();
  });
});
