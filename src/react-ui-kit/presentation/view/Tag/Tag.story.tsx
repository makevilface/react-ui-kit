import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Tag from './Tag';

const Demo = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

storiesOf('Tag', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Tag>Apple</Tag>
      <Tag>Google</Tag>
      <Tag>Amazon</Tag>
      <Tag>Uber</Tag>
    </Demo>
  </StorybookContainer>
));
