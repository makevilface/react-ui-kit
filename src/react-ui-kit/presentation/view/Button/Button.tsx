import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import cn from 'classnames';

import { transition } from '../../utils/transition';
import Loader from '../Loader';
import { sharedPreferences } from '../styles/sharedPreferences';

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  stretched?: boolean;
  loading?: boolean;
  use?: 'primary' | 'text';
  justifyContent?: React.CSSProperties['justifyContent'];
};

const Button = ({
  children = 'Submit',
  className,
  use,
  disabled = false,
  stretched = false,
  loading = false,
  justifyContent = 'flex-start',
  ...restProps
}: Readonly<TButtonProps>) => (
  <SButton
    aria-disabled={disabled ? 'true' : 'false'}
    className={cn(
      {
        [TextButtonStyled]: use === 'text',
        [StretchedStyles]: stretched,
        [LoadingStyles]: loading,
      },
      className,
    )}
    disabled={disabled}
    justifyContent={justifyContent}
    {...restProps}
  >
    {loading ? <Loader className={LoaderStyles} /> : children}
  </SButton>
);

export default React.memo(Button);

const SButton = styled.button<{ justifyContent: string }>`
  min-width: 140px;
  min-height: 44px;

  font-family: ${sharedPreferences.fontsFamilies.primaryFont};
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.4px;

  justify-content: ${({ justifyContent }) => justifyContent};

  user-select: none;
  border: 1px solid var(--button_primary-border);
  border-radius: 8px;
  padding: 0 16px;

  background: var(--button_primary_background);
  color: var(--button_primary_foreground);
  transition: ${transition('opacity', 'color', 'border-color', 'box-shadow', 'transform')};
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  &:enabled {
    &:hover,
    &:focus {
      opacity: 0.88;
      box-shadow: 0 2px 8px 0 rgba(#222328, 0.3);
    }
    &:active {
      opacity: 0.88;
      box-shadow: none;
      transform: scale(0.98);
      transition: transform 0.05s ease-out;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--button_disabled_background);
    color: var(--button_disabled_foreground);
  }
`;

const TextButtonStyled = css`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: opacity 200ms ease-out;

  &:hover {
    opacity: 0.6 !important;
  }
`;

const StretchedStyles = css`
  width: 100%;
  flex-grow: 1;
  flex-basis: 0;
`;

const LoaderStyles = css`
  --spinner-size: 32px;
`;

const LoadingStyles = css`
  filter: none !important;
  pointer-events: none !important;
`;
