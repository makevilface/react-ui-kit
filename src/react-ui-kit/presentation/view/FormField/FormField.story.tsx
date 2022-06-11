import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { styled } from '@linaria/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as yup from 'yup';

import StorybookContainer from '../StorybookContainer';

import FormField from './FormField';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('FormField', module).add('default', () => {
  const isRequired = boolean('required', true);
  const isOptional = boolean('optional', false);

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email('Неверная почта').required('Введите почту'),
      }),
    ),
  });
  return (
    <StorybookContainer>
      <Demo>
        <FormProvider {...form}>
          <FormField
            aria-label="Preview TextField component"
            hint="введите вашу почту"
            label="Почта"
            name="email"
            optional={isOptional}
            placeholder="test@gmail.com"
            required={isRequired}
            tabIndex={-1}
          />
        </FormProvider>
      </Demo>
    </StorybookContainer>
  );
});
