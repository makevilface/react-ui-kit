import React from 'react';

import { styled } from '@linaria/react';

import Header from '../../react-ui-kit/view/Header';

type GeneralLayoutProps = {
  children: React.ReactNode;
};

const SGeneralLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const GeneralLayout = ({ children }: GeneralLayoutProps) => (
  <SGeneralLayoutWrapper>
    <Header />
    <main id="main-content">{children}</main>
    {/* <Footer /> */}
  </SGeneralLayoutWrapper>
);

export default GeneralLayout;
