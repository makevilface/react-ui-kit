import React from 'react';

import { styled } from '@linaria/react';

import type { TAccordion } from './AccordionItem';
import AccordionItem from './AccordionItem';

type TAccordionProps = {
  items: Array<TAccordion>;
  title?: string;
};

const Accordion = ({ items, title }: Readonly<TAccordionProps>) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(2);

  return (
    <SContainer>
      <STitle>{title}</STitle>
      <div>
        {items.map((item, index) => {
          const showDescription = index === activeIndex;
          return (
            <AccordionItem
              key={`${index}-${item.title}`}
              item={item}
              showDescription={showDescription}
              onClick={() => {
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
    </SContainer>
  );
};

export default React.memo(Accordion);

const SContainer = styled.div`
  width: 100%;
  padding-top: 65px;
  padding-bottom: 80px;
`;

const STitle = styled.span`
  margin: 0;
  padding-bottom: 25px;
`;
