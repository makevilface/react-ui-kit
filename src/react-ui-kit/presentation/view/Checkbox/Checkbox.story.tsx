import React from 'react';

import { styled } from '@linaria/react';

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Checkbox from './Checkbox';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Checkbox', module).add('default', () => {
  const isChecked = boolean('isChecked', false);
  return (
    <StorybookContainer>
      <Demo>
        <Checkbox value={isChecked} onToggle={() => {}} />
      </Demo>
    </StorybookContainer>
  );
});
