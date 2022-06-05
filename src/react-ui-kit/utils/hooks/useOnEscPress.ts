import { useCallback } from 'react';

export const useOnEscPress = (callback: () => void): ((e: KeyboardEvent) => void) =>
  useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        callback();
      }
    },
    [callback],
  );
