import { useEffect, useState } from 'react';

export const usePreparePortal = (): HTMLDivElement | null => {
  const [portalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(portalContainer);

    return () => {
      document.body.removeChild(portalContainer);
    };
  }, []);

  return portalContainer;
};
