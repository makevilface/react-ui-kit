import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { styled } from '@linaria/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as yup from 'yup';

import StorybookContainer from '../StorybookContainer';

import PhoneField from './PhoneField';

const Demo = styled.div`
  padding: 80px;
`;

storiesOf('PhoneField', module).add('default', () => {
  const isRequired = boolean('required', true);
  const isOptional = boolean('optional', false);

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        phone: yup.string().trim().required('Введите номер телефона'),
      }),
    ),
  });
  return (
    <StorybookContainer>
      <Demo>
        <FormProvider {...form}>
          <Controller
            control={form.control}
            defaultValue=""
            name="phone"
            render={({ field: { onChange, name, value } }) => (
              <PhoneField
                autoCapitalize="off"
                autoCorrect="off"
                hint="введите ваш номер телефона"
                label="Номер телефона"
                name={name}
                optional={isOptional}
                placeholder="+7 123 463 88 03"
                required={isRequired}
                tabIndex={-2}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </FormProvider>
      </Demo>
    </StorybookContainer>
  );
});
