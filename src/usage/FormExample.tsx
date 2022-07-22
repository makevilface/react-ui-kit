import { Controller, FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, FormField, PhoneField, TextArea } from '../react-ui-kit/presentation/view';

const FormExample = () => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email('Неверная почта').optional(),
        phone: yup.string().trim().required('Введите номер телефона'),
        textarea: yup.string().max(50, 'Строка не должна превышать 50 символов'),
      }),
    ),
  });
  const onSubmit = async (data: unknown) => {};

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
                hint="введите ваш номер телефона"
                label="Номер телефона"
                name={name}
                placeholder="+7 123 463 88 03"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <TextArea aria-label="Об проекте" maxLength={50} name="textarea" placeholder="Об проекте" />

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

export default FormExample;
