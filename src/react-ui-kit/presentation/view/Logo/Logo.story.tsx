import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import demoSvg from '../../../../../public/netflix.svg';
import StorybookContainer from '../StorybookContainer';

import Logo from './Logo';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Logo', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Logo brandName="Netflix" height="35px" role="presentation" src={demoSvg} />
    </Demo>
  </StorybookContainer>
));
