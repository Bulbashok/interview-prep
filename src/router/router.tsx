import { BrowserRouter, Routes, Route } from 'react-router';
import { appRoutes, authRoutes, protectedRoutes } from './routes';
import { ProtectedRoute } from '../components/ProtectedRoute';
import NotFoundPage from '../pages/404/404';
import HomePageLanding from '../pages/home/home';
import RegisterPage from '../pages/register/register';
import LoginPage from '../pages/login/login';

const Profile = () => <div> Profile Page </div>;
const Dashboard = () => <div> Dashboard Page </div>;
const Library = () => <div> Library Page </div>;

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.home} element={<HomePageLanding />} />
        <Route path={authRoutes.login} element={<LoginPage />} />
        <Route path={authRoutes.register} element={<RegisterPage />} />
        <Route
          path={protectedRoutes.profile}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path={protectedRoutes.dashboard} element={<Dashboard />} />
        <Route path={protectedRoutes.library} element={<Library />} />
        <Route path={appRoutes.notFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
