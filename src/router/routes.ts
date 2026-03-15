export const appRoutes = {
  home: '/',
  login: '/login',
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
