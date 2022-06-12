import React, { memo } from 'react';

import { styled } from '@linaria/react';

type TTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

const Tag = ({ children }: Readonly<TTagProps>) => <STag>{children}</STag>;

export default memo(Tag);

const STag = styled.span`
  color: #000;
  height: auto;
  text-align: center;

  border: 1px solid #000;
  border-radius: 100px;
  padding: 8px 18px;
`;
