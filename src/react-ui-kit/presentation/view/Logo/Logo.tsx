import React from 'react';

import { styled } from '@linaria/react';

export type TLogoProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  width?: string;
  height?: string;
};

const Logo = (props: Readonly<TLogoProps>) => <SLogo {...props} />;

export default React.memo(Logo);

const SLogo = styled.img<TLogoProps>`
  position: relative;
  cursor: pointer;

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;
