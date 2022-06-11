import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Notification from './Notification';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Notification', module).add('with-action', () => (
  <StorybookContainer>
    <Demo>
      <Notification actionLabel="open" date="now" onAction={() => {}} />
    </Demo>
  </StorybookContainer>
));

storiesOf('Notification', module).add('without-action', () => (
  <StorybookContainer>
    <Demo>
      <Notification date="now" />
    </Demo>
  </StorybookContainer>
));
