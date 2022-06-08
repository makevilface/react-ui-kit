import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { transition } from '../../utils/transition';

export type TAccordion = { title: string; description: string };

type TAccordionItemProps = {
  showDescription: boolean;
  item: TAccordion;
  onClick: () => void;
};

const AccordionItem = ({ showDescription, item, onClick }: Readonly<TAccordionItemProps>) => {
  const descClassName = showDescription ? ShowDescriptionStyles : '';
  const buttonClassName = showDescription ? SButtonStylesActive : SButtonStyles;
  return (
    <SItem key={item.title}>
      <SButton className={buttonClassName} fontWeightBold={showDescription} type="button" onClick={onClick}>
        {item.title}
      </SButton>
      <SItemDescription className={descClassName}>{item.description}</SItemDescription>
    </SItem>
  );
};

export default AccordionItem;

const SItem = styled.div`
  max-width: 750px;
  width: 100%;
  border-bottom: 1px solid hsl(240, 5%, 91%);
`;

const ShowDescriptionStyles = css`
  height: 2rem !important;
  margin-bottom: 15px !important;
`;

const SItemDescription = styled.p`
  padding-right: 17px;
  margin-left: 10px;
  height: 0;
  overflow: hidden;
  transition: ${transition('all')};
`;

const SButtonStylesActive = css`
  &::after {
    content: 'close';
    margin-right: 17px;
    transform: rotate(90deg);
  }
`;

const SButtonStyles = css`
  &::after {
    content: 'open';
    margin-right: 17px;
    transform: rotate(90deg);
  }
`;

const SButton = styled.button<{ fontWeightBold: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-weight: ${(props) => (props.fontWeightBold ? '700' : '')};

  padding: 17px 0;

  &:hover {
    color: #b6d1c7;
  }
`;
