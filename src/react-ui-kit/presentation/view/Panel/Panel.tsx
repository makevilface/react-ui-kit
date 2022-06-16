import React, { memo } from 'react';

import { styled } from '@linaria/react';

export type TPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

/**
  `Panel` – это контейнер для контента.
 */
const Panel = ({ children, ...restProps }: TPanelProps) => <SPanel {...restProps}>{children}</SPanel>;

export default memo(Panel);

const SPanel = styled.div`
  min-height: 150px;
  min-width: 100px;
  background-color: #242424;
  border-radius: 12px;
  display: inline-flex;
`;
