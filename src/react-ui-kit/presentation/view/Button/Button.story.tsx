import React from 'react';

import { styled } from '@linaria/react';

import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Button from './Button';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Button', module).add('primary', () => {
  const justifyContent = select(
    'justifyContent',
    ['flex-start', 'flex-end', 'left', 'right', 'end', 'start', 'center'],
    'center',
  );
  return (
    <StorybookContainer>
      <Demo>
        <Button justifyContent={justifyContent} use="primary">
          Click on me!
        </Button>
      </Demo>
    </StorybookContainer>
  );
});

storiesOf('Button', module).add('text-only', () => (
  <StorybookContainer>
    <Demo>
      <Button use="text">Click on me!</Button>
    </Demo>
  </StorybookContainer>
));

storiesOf('Button', module).add('loading', () => (
  <StorybookContainer>
    <Demo>
      <Button loading>Click on me!</Button>
    </Demo>
  </StorybookContainer>
));

storiesOf('Button', module).add('stretched', () => {
  const justifyContent = select(
    'justifyContent',
    ['flex-start', 'flex-end', 'left', 'right', 'end', 'start', 'center'],
    'center',
  );
  return (
    <StorybookContainer>
      <Demo>
        <Button stretched justifyContent={justifyContent}>
          Click on me!
        </Button>
      </Demo>
    </StorybookContainer>
  );
});
