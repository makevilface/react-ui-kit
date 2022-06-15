import React, { memo } from 'react';

import { styled } from '@linaria/react';

type TAvatarProps = React.HTMLAttributes<HTMLHeadingElement> & {
  content: string;
};

const Hero = ({ content, ...restProps }: TAvatarProps) => <SHero {...restProps}>{content}</SHero>;

export default memo(Hero);

const SHero = styled.h2`
  display: inline-block;
  background: linear-gradient(90deg, #ffb870, #f391cf 50%, #43aeff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 119px;
`;
