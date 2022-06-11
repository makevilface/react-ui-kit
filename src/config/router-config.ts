import React, { lazy } from 'react';

interface Route {
  path: string | string[];
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('../routes/Home')),
  },
  {
    path: '/:404*',
    component: lazy(() => import('../routes/NotFound')),
  },
];
