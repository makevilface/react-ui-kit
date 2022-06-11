import React from 'react';

import { styled } from '@linaria/react';

import { storiesOf } from '@storybook/react';

import StorybookContainer from '../StorybookContainer';

import Accordion from './Accordion';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('Accordion', module).add('default', () => (
  <StorybookContainer>
    <Demo>
      <Accordion
        items={[
          {
            title: 'Настройка одним касанием',
            description: 'Наушники мгновенно подключаются к вашему iPhone или iPad.',
          },
          {
            title: 'Автоматическое переключение',
            description:
              'Если у вас несколько устройств Apple, наушники будут выбирать нужный источник звука, автоматически переключаясь между iPhone, Apple Watch, iPad, Mac',
          },
          {
            title: 'Совместный доступ к аудио',
            description: 'Слушайте песни, подкасты и любое другое аудио вдвоём через две пары AirPods',
          },
        ]}
        title="Air Pods"
      />
    </Demo>
  </StorybookContainer>
));
