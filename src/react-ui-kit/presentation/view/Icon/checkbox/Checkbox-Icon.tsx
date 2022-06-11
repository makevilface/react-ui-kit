import React from 'react';

type TCheckboxIconProps = React.HTMLAttributes<SVGElement> & {
  className?: string;
};

const CheckboxIcon = ({ className }: Readonly<TCheckboxIconProps>) => (
  <svg
    aria-label="checkbox icon"
    className={className}
    height="16"
    viewBox="0 0 16 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

export default React.memo(CheckboxIcon);