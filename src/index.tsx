import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App';
import Helmet from './app/Helmet';
import Theme from './react-ui-kit/presentation/view/Theme';

ReactDOM.render(
  <Helmet>
    <StrictMode>
      <Router>
        <Theme>
          <App />
        </Theme>
      </Router>
    </StrictMode>
  </Helmet>,
  document.getElementById('root'),
);
