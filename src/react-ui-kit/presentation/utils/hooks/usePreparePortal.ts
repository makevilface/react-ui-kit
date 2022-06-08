import { useEffect, useState } from 'react';

export const usePreparePortal = (): HTMLDivElement | null => {
  const [portalContainer] = useState(() => document.createElement('div'));

  // рассмотрим следующий код:
  // const [element, setElement] = useState(document.createElement('div'));
  // можно его привести к следующему:
  // const div = document.createElement('div');
  // const [element, setElement] = useState(div);

  // т.е. абсолютно на каждый рендер создается новый div. И я решил не создавать div.

  // С другой стороны в моем коде:
  // const callback = () => document.createElement('div');
  // const [element, setElement] = useState(callback);

  // В данном примере, мы не создаем div на каждый render, а создаем функцию callback на каждый рендер.

  useEffect(() => {
    document.body.appendChild(portalContainer);

    return () => {
      document.body.removeChild(portalContainer);
    };
  }, []);

  return portalContainer;
};
