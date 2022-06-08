/* eslint-disable react/no-multi-comp */
import React, { Suspense } from 'react';

import { styled } from '@linaria/react';

import Loader from '../../react-ui-kit/presentation/view/Loader';
import { GlobalStyles } from '../../react-ui-kit/presentation/view/styles/globalStyles';
import Router from '../Router';

const SAppSpinner = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => (
  <SAppSpinner>
    <Loader />
  </SAppSpinner>
);

const App = () => (
  <div className={GlobalStyles}>
    <Suspense fallback={Spinner}>
      <Router />
    </Suspense>
  </div>
);

export default App;
