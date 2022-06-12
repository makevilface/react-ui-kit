import React, { useState } from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import Button from '../Button';
import StorybookContainer from '../StorybookContainer';

import Promo from './Promo';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Promo', module).add('default', () => {
  const [isPromoVisible, setPromoVisible] = useState(false);
  const handlePromoClose = () => {
    setPromoVisible(false);
  };
  return (
    <StorybookContainer>
      <Demo>
        <Button justifyContent="center" use="primary" onClick={() => setPromoVisible(true)}>
          Click on me!
        </Button>
        <Promo handleRequestClose={handlePromoClose} isOpen={isPromoVisible} />
      </Demo>
    </StorybookContainer>
  );
});
