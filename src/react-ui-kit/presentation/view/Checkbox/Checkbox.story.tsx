import React, { useState } from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Checkbox from './Checkbox';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Checkbox', module).add('default', () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <StorybookContainer>
      <Demo>
        <Checkbox value={isChecked} onToggle={() => setChecked((prev) => !prev)} />
      </Demo>
    </StorybookContainer>
  );
});
