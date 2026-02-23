export const appRoutes = {
  home: '/',
  notFound: '*',
} as const;

export const authRoutes = {
  login: '/login',
  register: '/register',
} as const;

export const protectedRoutes = {
  profile: '/profile',
  dashboard: '/dashboard',
  library: '/library',
} as const;
