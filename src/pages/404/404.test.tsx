import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import NotFoundPage, { videos } from './404';
import { i18nKeys } from '@/i18n/i18n-keys';
import { HelmetProvider } from 'react-helmet-async';
import { appRoutes } from '@/router/routes';
import { mockI18n } from '@/test/mocks';

const renderNotFoundPage = () => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    </HelmetProvider>,
  );
};

mockI18n();

const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('NotFoundPage', () => {
  test('render', () => {
    renderNotFoundPage();
  });

  test('correct texts content in page', () => {
    renderNotFoundPage();

    expect(screen.getByText(i18nKeys[404].title)).toBeInTheDocument();
    expect(screen.getByText(i18nKeys[404].subtitle)).toBeInTheDocument();

    expect(screen.getByText(i18nKeys[404].backButton)).toBeInTheDocument();
    expect(screen.getByText(i18nKeys[404].homePageButton)).toBeInTheDocument();
  });

  test('render video with correct attributes', () => {
    renderNotFoundPage();

    const video = screen.getByTestId<HTMLVideoElement>('404-video');

    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('loop');
    expect(video.muted).toBe(true);
  });

  test('one of the random videos', () => {
    renderNotFoundPage();

    const video = screen.getByTestId('404-video');
    const videoSrc = video.getAttribute('src');
    expect(videos.some((video) => video === videoSrc)).toBe(true);
  });

  test('check correct naviagate home and back buttons', () => {
    renderNotFoundPage();

    const backButton = screen.getByText(i18nKeys[404].backButton),
      homeButton = screen.getByText(i18nKeys[404].homePageButton);

    backButton.click();
    expect(mockNavigate).toHaveBeenCalledWith(-1);

    homeButton.click();
    expect(mockNavigate).toHaveBeenCalledWith(appRoutes.home);
  });
});
