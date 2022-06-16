import React from 'react';

import { styled } from '@linaria/react';

export type TLoaderProps = {
  className?: string;
  text?: string;
};

const fractions = Array.from({ length: 12 }).map((__: unknown, index: number) => `fraction-${index}`);

/**
  Чтобы изменить размер лоудера нужно задать --spinner-size
  @example
  const LoaderStyles = css`
   --spinner-size: 32px;
  `;
 */
const Loader = ({ className = '', text }: Readonly<TLoaderProps>) => (
  <SWrapper>
    <SSpinnerContainer className={className}>
      {fractions.map((fraction) => (
        <SSpinnerFraction key={fraction} />
      ))}
    </SSpinnerContainer>
    {text && <span>{text}</span>}
  </SWrapper>
);

export default React.memo(Loader);

const SWrapper = styled.div`
  min-width: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    padding-top: 10px;
  }
`;

const SSpinnerFraction = styled.div`
  @keyframes fractionAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  transform-origin: calc(var(--spinner-size) * 0.5) calc(var(--spinner-size) * 0.5);
  animation: fractionAnimation var(--speed) linear infinite;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: calc((var(--spinner-size) * 0.5) - var(--spinner-radius) - (var(--fraction-height) * 0.5));
    left: calc((var(--spinner-size) * 0.5) - (var(--fraction-width) * 0.5));
    width: var(--fraction-width);
    height: var(--fraction-height);
    border-radius: 20%;
    background: var(--primary-color-10);
  }

  &:nth-child(1) {
    transform: rotate(calc(1 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 1) / 12));
  }

  &:nth-child(2) {
    transform: rotate(calc(2 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 2) / 12));
  }

  &:nth-child(3) {
    transform: rotate(calc(3 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 3) / 12));
  }

  &:nth-child(4) {
    transform: rotate(calc(4 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 4) / 12));
  }

  &:nth-child(5) {
    transform: rotate(calc(5 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 5) / 12));
  }

  &:nth-child(6) {
    transform: rotate(calc(6 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 6) / 12));
  }

  &:nth-child(7) {
    transform: rotate(calc(7 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 7) / 12));
  }

  &:nth-child(8) {
    transform: rotate(calc(8 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 8) / 12));
  }

  &:nth-child(9) {
    transform: rotate(calc(9 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 9) / 12));
  }

  &:nth-child(10) {
    transform: rotate(calc(10 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 10) / 12));
  }

  &:nth-child(11) {
    transform: rotate(calc(11 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 11) / 12));
  }

  &:nth-child(12) {
    transform: rotate(calc(12 * 30deg));
    animation-delay: calc(var(--speed) * (-1 * (11 - 12) / 12));
  }
`;

const SSpinnerContainer = styled.div`
  --spinner-size: 80px;
  --spinner-radius: calc(var(--spinner-size) * 0.33);
  --fraction-width: calc(var(--spinner-size) * 0.08);
  --fraction-height: calc(var(--spinner-size) * 0.22);
  --speed: 1.5s;

  display: inline-block;
  position: relative;
  color: var(--primary-color);
  width: var(--spinner-size);
  height: var(--spinner-size);
`;
