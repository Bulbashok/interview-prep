export const appRoutes = {
  home: '/',
  notFound: '/404',
} as const;

export const authRoutes = {
  login: '/auth/login',
  register: '/auth/register',
} as const;

export const protectedRoutes = {
  profile: '/profile',
  dashboard: '/dashboard',
  library: '/library',
} as const;
