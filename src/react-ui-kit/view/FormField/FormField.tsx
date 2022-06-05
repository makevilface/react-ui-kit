import React from 'react';
import { useFormContext } from 'react-hook-form';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import cn from 'classnames';

import { transition } from '../../utils/transition';
import { uuid } from '../../utils/uuid';

type TFormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  hint?: string;
  optional?: boolean;
  required?: boolean;
  className?: string;
  // icon?: React.ReactNode; // TODO: add icon
};

const FormField = ({
  name,
  label,
  hint,
  required = false,
  optional = false,
  className,
  ...rest
}: Readonly<TFormFieldProps>) => {
  const { register, formState } = useFormContext();
  const inputId = uuid();
  const metaId = uuid();
  return (
    <SWrapper>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && !optional && <SRequired>*</SRequired>}
          {!required && optional && <SOptional>(Optional)</SOptional>}
        </label>
      )}

      <input
        {...register(name)}
        aria-describedby={metaId}
        aria-invalid={!!formState.errors[name]?.message}
        className={cn(
          SInputStyles,
          {
            error: !!formState.errors[name]?.message,
          },
          className,
        )}
        id={inputId}
        required={required && !optional}
        type="text"
        {...rest}
      />

      {(hint || !!formState.errors[name]?.message) && (
        <small id={metaId}>{formState.errors[name]?.message || hint}</small>
      )}
    </SWrapper>
  );
};

export default React.memo(FormField);

const SRequired = styled.span`
  color: var(--warning-color);
  font-size: 16px;
  margin-left: 6px;
`;

const SOptional = styled.span`
  font-size: 12px;
  opacity: 0.6;
  text-transform: lowercase;
  margin-left: 6px;
`;

const SInputStyles = css`
  border: none;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 40px;
  padding: 8px 0;
  border-bottom: 1px solid var(--primary-color-20);
  background-color: transparent;
  -webkit-appearance: none;
  transition: ${transition('border-color')};

  &::placeholder {
    color: var(--primary-color-20);
  }

  &:focus,
  &.focused {
    outline: none;
    border-color: #226f54;
  }

  &.error {
    border-color: var(--warning-color);

    ~ small {
      color: var(--warning-color);
    }
  }
  &:disabled {
    cursor: not-allowed;
    color: #bdc0cf;
    background-color: #fafafc;
    box-shadow: none;
  }
`;

const SWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  label {
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }

  small {
    display: inline-block;
    margin-top: 8px;
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }
`;
