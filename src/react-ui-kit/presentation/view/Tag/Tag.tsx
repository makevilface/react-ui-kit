import React, { memo } from 'react';

import { styled } from '@linaria/react';

type TTagProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
  withBorder?: boolean;
};

const Tag = ({ children, withBorder = true, ...restProps }: Readonly<TTagProps>) => (
  <STag withBorder={withBorder} {...restProps}>
    {children}
  </STag>
);

export default memo(Tag);

const STag = styled.span<{ withBorder: boolean }>`
  color: #000;
  height: auto;
  text-align: center;

  border: ${({ withBorder }) => (withBorder ? '1px solid #000' : 'none')};
  border-radius: 100px;
  padding: 8px 18px;
`;
