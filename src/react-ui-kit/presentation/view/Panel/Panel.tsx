import React from 'react';

import { styled } from '@linaria/react';

type TPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

/**
  `Panel` – это контейнер для контента.
 */
const Panel = ({ children }: TPanelProps) => <SPanel>{children}</SPanel>;

export default Panel;

const SPanel = styled.div`
  min-height: 150px;
  min-width: 150px;
  background-color: #242424;
  border-radius: 12px;
  display: inline-flex;
`;
