import React from 'react';

import { styled } from '@linaria/react';

import type { TAccordion } from './AccordionItem';
import AccordionItem from './AccordionItem';

export type TAccordionProps = {
  items: Array<TAccordion>;
  title?: string;
};

const Accordion = ({ items, title }: Readonly<TAccordionProps>) => {
  const [activeItemIndex, setActiveItemIndex] = React.useState<number | null>(2);

  const handelChangeActiveItem = (index: number) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <SContainer>
      <STitle>{title}</STitle>
      {items.map((item, index) => (
        <AccordionItem
          key={`${index}_${item.title}`}
          item={item}
          shouldShowDescription={index === activeItemIndex}
          onClick={() => {
            handelChangeActiveItem(index);
          }}
        />
      ))}
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
