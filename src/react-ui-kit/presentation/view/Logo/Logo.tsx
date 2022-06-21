import React from 'react';

import { styled } from '@linaria/react';

export type TLogoProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  width?: string;
  height?: string;
  brandName?: string;
};

const Logo = ({ brandName, ...restProps }: Readonly<TLogoProps>) => (
  <SLogoWrapper>
    <SLogo {...restProps} />
    {brandName && <SBrand translate="no">{brandName}</SBrand>}
  </SLogoWrapper>
);

export default React.memo(Logo);

const SLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SBrand = styled.span`
  margin-left: 12px;

  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

const SLogo = styled.img<TLogoProps>`
  position: relative;
  cursor: pointer;
  transform: translateY(10%);

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;
