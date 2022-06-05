import { useLayoutEffect } from 'react';

export const useLockScroll = (opened: boolean) => {
  useLayoutEffect(() => {
    const originalScrollStyle = window.getComputedStyle(document.body).overflow;
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalScrollStyle;
    }
    return () => {
      document.body.style.overflow = originalScrollStyle;
    };
  }, [opened]);
};
