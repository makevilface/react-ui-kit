import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Carousel from './Carousel';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Carousel', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Carousel />
    </Demo>
  </StorybookContainer>
));
