import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Accordion,
  Avatar,
  Button,
  Checkbox,
  FormField,
  Loader,
  Notification,
  PhoneField,
  Promo,
} from '../../react-ui-kit/presentation/view';

const Home = () => {
  const [isChecked, setChecked] = useState(false);
  const [isPromoVisible, setPromoVisible] = useState(true);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  const handlePromoClose = () => {
    setPromoVisible(false);
  };

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
    <>
      <Promo handleRequestClose={handlePromoClose} isOpen={isPromoVisible} />
      <Notification
        actionLabel="open"
        date="now"
        onAction={() => {
          console.log('test');
        }}
      />
      <Notification date="Friday" />
      <Notification date="now" />
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
      <Loader text="loading" />
      <Avatar label="cat" mode="app" size="large" status="😼" />
      test
      <Avatar label="unicorn" size="small" status="🦄" />
      <Accordion
        items={[
          { title: 'title 1', description: 'desc 1' },
          { title: 'title 1', description: 'desc 1' },
          { title: 'title 1', description: 'desc 1' },
        ]}
      />
      <Checkbox value={isChecked} onToggle={handleClick} />
      {/* <Img height="400px" src="https://pbs.twimg.com/media/FR1Rb2DXoAIpUF8?format=jpg&name=large" /> */}
    </>
  );
};

export default Home;
