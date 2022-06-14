import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './react-ui-kit/presentation/view/styles/globalStyles';
import Theme from './react-ui-kit/presentation/view/Theme';
import Home from './routes/Home';

ReactDOM.render(
  <StrictMode>
    <Theme>
      <div className={GlobalStyles}>
        <Home />
      </div>
    </Theme>
  </StrictMode>,
  document.getElementById('root'),
);
