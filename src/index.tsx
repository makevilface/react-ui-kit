import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './react-ui-kit/presentation/view/styles/globalStyles';
import Theme from './react-ui-kit/presentation/view/Theme';
import FormExample from './usage/FormExample';

ReactDOM.render(
  <StrictMode>
    <Theme>
      <div className={GlobalStyles}>
        <FormExample />
      </div>
    </Theme>
  </StrictMode>,
  document.getElementById('root'),
);
