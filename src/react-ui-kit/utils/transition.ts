const animationTime = '200ms';

export const transition = (...properties: string[]): string =>
  properties.map((value) => `${value} ${animationTime} cubic-bezier(0.2, 0.8, 0.4, 1)`).join(',');
