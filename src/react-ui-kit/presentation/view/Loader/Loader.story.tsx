import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Loader from './Loader';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Loader', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Loader text="Processing..." />
    </Demo>
  </StorybookContainer>
));
