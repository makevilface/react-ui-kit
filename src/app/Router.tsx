import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../config/router-config';

const Router = () => (
  <Switch>
    {routes.map(({ path, component }, i) => (
      <Route key={i} exact component={component} path={path} />
    ))}
  </Switch>
);

export default React.memo(Router);
