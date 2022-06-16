import React, { useMemo } from 'react';

import { styled } from '@linaria/react';

import Tippy, { TippyProps } from '@tippyjs/react/headless';

import { newTooltipVM } from './Tooltip.VM';

export type TTooltipProps = Omit<TippyProps, 'render'> & {
  text: React.ReactNode;
  delayToShow?: number;
};

const Tooltip = ({ text, delayToShow = 1, children, ...tippyProps }: Readonly<TTooltipProps>) => {
  const vm = useMemo(() => newTooltipVM(), []);

  return (
    <Tippy {...tippyProps} render={() => vm.renderTooltip(text, delayToShow)}>
      {children}
    </Tippy>
  );
};

export default React.memo(Tooltip);

export const STooltip = styled.div<{ delayToShow: number }>`
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  background: var(--primary-color-0);
  box-shadow: 0 4px 12px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;

  animation-duration: ${({ delayToShow }) => `${delayToShow}s`};
  animation-name: display;
  animation-timing-function: ease;
  animation-delay: 0s;

  @keyframes display {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
