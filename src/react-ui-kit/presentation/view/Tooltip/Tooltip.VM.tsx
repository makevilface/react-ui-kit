import React from 'react';

import { STooltip } from './Tooltip';

export interface TooltipVM {
  renderTooltip: (text: React.ReactNode, delayToShow: number) => JSX.Element;
}

const renderTooltip = (text: React.ReactNode, delayToShow: number) => (
  <STooltip delayToShow={delayToShow}>{text}</STooltip>
);

export const newTooltipVM = (): TooltipVM => ({
  renderTooltip,
});
