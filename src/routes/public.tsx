import type { RouteObject } from 'react-router';
import App from '@/App.tsx';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
];
