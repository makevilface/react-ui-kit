import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, FormField, PhoneField } from '../../react-ui-kit/presentation/view';

const Home = () => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email('Неверная почта').optional(),
        phone: yup.string().trim().required('Введите номер телефона'),
      }),
    ),
  });
  const onSubmit = async (data: any) => {
    console.log('-----data', data);
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            optional
            aria-label="Preview TextField component"
            hint="введите вашу почту"
            label="Почта"
            name="email"
            placeholder="test@gmail.com"
            tabIndex={-1}
          />
          <Controller
            control={form.control}
            defaultValue=""
            name="phone"
            render={({ field: { onChange, name, value } }) => (
              <PhoneField
                required
                autoCapitalize="off"
                autoCorrect="off"
                hint="введите ваш номер телефона"
                label="Номер телефона"
                name={name}
                placeholder="+7 123 463 88 03"
                tabIndex={-2}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <div>
            <Button disabled={!form.formState.isValid || form.formState.isSubmitting} type="submit">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;
