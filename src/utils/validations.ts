import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').optional(),
  phone: yup.string().trim().required('Введите номер телефона'),
});
