import { BrowserRouter, Routes, Route } from 'react-router';
import { appRoutes, authRoutes, protectedRoutes } from './routes';

const HomePage = () => <div> Home Page </div>;
const Login = () => <div> Login Page </div>;
const Register = () => <div> Register Page </div>;
const Profile = () => <div> Profile Page </div>;
const Dashboard = () => <div> Dashboard Page </div>;
const Library = () => <div> Library Page </div>;
const NotFound = () => <div> 404 Page </div>;

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.home} element={<HomePage />} />
        <Route path={authRoutes.login} element={<Login />} />
        <Route path={authRoutes.register} element={<Register />} />
        <Route path={protectedRoutes.profile} element={<Profile />} />
        <Route path={protectedRoutes.dashboard} element={<Dashboard />} />
        <Route path={protectedRoutes.library} element={<Library />} />
        <Route path={appRoutes.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
