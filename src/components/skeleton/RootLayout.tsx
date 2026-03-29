import { Outlet, useNavigation } from 'react-router';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

export const RootLayout = () => {
  const navigation = useNavigation();
  const { loading: isAuthLoading } = useAuth();

  const isAppBusy = navigation.state === 'loading' || isAuthLoading;
  console.log('Status:', { nav: navigation.state, auth: isAuthLoading });
  return (
    <>
      <Outlet />

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 101 }}
        open={isAppBusy}
      >
        <CircularProgress color="inherit" size={50} />
      </Backdrop>
    </>
  );
};
