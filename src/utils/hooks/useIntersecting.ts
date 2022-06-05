import { useEffect, useState } from 'react';

// const ref = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
// const onScreen = useIntersecting<HTMLDivElement>(ref);

export const useIntersecting = <T>(ref: React.MutableRefObject<T | undefined>, threshold = 0.25): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      },
    );

    if (current && current instanceof Element) observer.observe(current);

    return () => {
      if (current && current instanceof Element) observer.unobserve(current);
    };
  }, [ref, threshold]);

  return isIntersecting;
};
