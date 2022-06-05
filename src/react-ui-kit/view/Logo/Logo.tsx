import React from 'react';

import { styled } from '@linaria/react';

const SLogo = styled.div`
  position: relative;
  z-index: 5;

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;

const Logo = () => <SLogo>require(&apos;static/NoLogo.svg&apos;)</SLogo>;

export default React.memo(Logo);
