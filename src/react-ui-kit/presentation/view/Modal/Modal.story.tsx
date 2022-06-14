import React, { useState } from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import Button from '../Button';
import StorybookContainer from '../StorybookContainer';

import Modal from './Modal';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Modal', module).add('with-close-button', () => {
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
        <Modal withCloseButton handleRequestClose={handlePromoClose} isOpen={isPromoVisible}>
          Hello world
        </Modal>
      </Demo>
    </StorybookContainer>
  );
});

storiesOf('Modal', module).add('without-close-button', () => {
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
        <Modal handleRequestClose={handlePromoClose} isOpen={isPromoVisible} withCloseButton={false}>
          Hello world
        </Modal>
      </Demo>
    </StorybookContainer>
  );
});
