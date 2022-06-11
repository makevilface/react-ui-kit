import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Img from './Img';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Img', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Img height="350px" src="https://leonardo.osnova.io/b6ecc674-622a-5287-8359-c90e695b3b58/" />
    </Demo>
  </StorybookContainer>
));
