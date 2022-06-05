import React, { lazy } from 'react';

interface Route {
  path: string | string[];
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: '/auth/login',
    component: lazy(() => import('../routes/Login')),
  },
  {
    path: '/home',
    component: lazy(() => import('../routes/Home')),
  },
  {
    path: '/',
    component: lazy(() => import('../routes/Welcome')),
  },
  {
    path: '/:404*',
    component: lazy(() => import('../routes/NotFound')),
  },
];
