import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import CheckboxIcon from '../Icon/checkbox';

export interface CheckboxProps {
  value: boolean;
  isDisabled?: boolean;
  onToggle?: () => void;
}

const Checkbox = ({ value, onToggle, isDisabled }: Readonly<CheckboxProps>) => {
  const className = isDisabled ? CheckboxDisabledStyles : '';
  return (
    <SCheckbox aria-checked={value ? 'true' : 'false'} className={className} role="checkbox" onClick={onToggle}>
      {value === true && <CheckboxIcon className={CheckboxIconStyles} />}
    </SCheckbox>
  );
};

export default React.memo(Checkbox);

const SCheckbox = styled.div`
  width: 18px;
  height: 18px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;

  position: relative;

  &:hover {
    border-color: rgba(255, 201, 115, 0.6);
    background: rgba(0, 0, 0, 0.1);
  }
`;

const CheckboxIconStyles = css`
  height: 24px;
  width: 24px;
  position: absolute;
  top: -8px;
  left: -3px;
`;

const CheckboxDisabledStyles = css`
  background-color: #484542;
  border-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: #484542;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .${CheckboxIconStyles} {
    color: #666666;
  }
`;
