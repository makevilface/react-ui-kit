import React from 'react';

type TChevronLeftIconProps = React.HTMLAttributes<SVGElement> & {
  className?: string;
};

const ChevronLeftIcon = ({ className }: Readonly<TChevronLeftIconProps>) => (
  <svg
    aria-label="сhevron left icon"
    className={className}
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      fillRule="evenodd"
    />
  </svg>
);

export default React.memo(ChevronLeftIcon);
