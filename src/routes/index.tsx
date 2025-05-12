import { type RouteObject } from 'react-router';
import { publicRoutes } from '@/routes/public.tsx';
import { privateRoutes } from '@/routes/private.tsx';

export const routers: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
  {
    path: '*',
    element: <>404 Not Found</>,
  },
];
