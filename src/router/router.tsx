import { createBrowserRouter, RouterProvider } from 'react-router';
import { appRoutes, authRoutes, protectedRoutes } from './routes';
import NotFoundPage from '../pages/404/404';
import HomePageLanding from '../pages/home/home';
import LoginPage from '@/pages/login/login';
import RegisterPage from '@/pages/register/register';
import ProfilePage from '@/pages/profile/profile';
import Dashboard from '@/pages/dashboard/dashboard';
import LibraryPage from '@/pages/library/library';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { RootLayout } from '../components/skeleton/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: appRoutes.home,
        element: <HomePageLanding />,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 800));
          return { status: 'ok' };
        },
      },
      {
        path: authRoutes.login,
        element: <LoginPage />,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 500));
          return null;
        },
      },
      {
        path: authRoutes.register,
        element: <RegisterPage />,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 500));
          return null;
        },
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: protectedRoutes.dashboard,
            element: <Dashboard />,
            loader: async () => {
              await new Promise((r) => setTimeout(r, 1000));
              return null;
            },
          },
          {
            path: protectedRoutes.profile,
            element: <ProfilePage />,
            loader: async () => {
              await new Promise((r) => setTimeout(r, 400));
              return null;
            },
          },
          {
            path: protectedRoutes.library,
            element: <LibraryPage />,
            loader: async () => {
              await new Promise((r) => setTimeout(r, 600));
              return null;
            },
          },
        ],
      },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
