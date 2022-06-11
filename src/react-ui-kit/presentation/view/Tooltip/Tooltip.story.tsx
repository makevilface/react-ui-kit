import React from 'react';

import { styled } from '@linaria/react';

import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Tooltip from './Tooltip';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Tooltip', module).add('default', () => {
  const placement = select(
    'placement',
    [
      'top-start',
      'top-end',
      'bottom-start',
      'bottom-end',
      'right-start',
      'right-end',
      'left-start',
      'left-end',
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'bottom',
      'right',
      'left',
    ],
    'auto',
  );

  const delayToShow = number('delayToShow', 1, { min: 0 });

  return (
    <StorybookContainer>
      <Demo>
        <Tooltip delayToShow={delayToShow} placement={placement} text="Tippy 😌">
          <span>Hover on me!</span>
        </Tooltip>
      </Demo>
    </StorybookContainer>
  );
});
