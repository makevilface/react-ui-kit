import React from 'react';

import { styled } from '@linaria/react';

type TPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

/**
  `Panel` – это контейнер для контента.
 */
const Panel = ({ children, ...restProps }: TPanelProps) => <SPanel {...restProps}>{children}</SPanel>;

export default Panel;

const SPanel = styled.div`
  min-height: 150px;
  min-width: 100px;
  background-color: #242424;
  border-radius: 12px;
  display: inline-flex;
`;
