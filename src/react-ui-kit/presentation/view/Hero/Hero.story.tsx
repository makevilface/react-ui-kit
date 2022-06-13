import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Hero from './Hero';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Hero', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Hero content="Подключаются к устройствам с волшебной лёгкостью." />
    </Demo>
  </StorybookContainer>
));
