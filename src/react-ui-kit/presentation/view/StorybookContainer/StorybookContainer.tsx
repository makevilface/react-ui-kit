import React from 'react';

import { GlobalStyles } from '../styles/globalStyles';
import Theme from '../Theme';

const StorybookContainer = ({ children }: { children: React.ReactNode }) => (
  <Theme>
    <div className={GlobalStyles}>{children}</div>
  </Theme>
);

export default StorybookContainer;
