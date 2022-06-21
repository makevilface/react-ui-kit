import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import TextArea from './TextArea';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('TextArea', module).add('default', () => (
  <StorybookContainer>
    <Demo>{/* <TextArea maxLength={40} minRows={2} placeholder="Об проекте" value="" /> */}</Demo>
  </StorybookContainer>
));
