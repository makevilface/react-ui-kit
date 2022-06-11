import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Avatar from './Avatar';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Avatar', module).add('default-mode', () => (
  <StorybookContainer>
    <Demo>
      <Avatar label="unicorn" size="small" status="🦄" />
    </Demo>
  </StorybookContainer>
));

storiesOf('Avatar', module).add('app-mode', () => (
  <StorybookContainer>
    <Demo>
      <Avatar label="cat" mode="app" size="large" status="😼" />
    </Demo>
  </StorybookContainer>
));
