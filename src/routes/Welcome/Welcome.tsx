import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import WavingHandImage from '../../assets/waving-hand.png';
import { Button } from '../../react-ui-kit/view';
import { ArrowRightCircleIcon } from '../../react-ui-kit/view/Icon';
import { sharedPreferences } from '../../react-ui-kit/view/styles/sharedPreferences';

const SWelcomePageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

const SIntroTitle = styled.div`
  @keyframes waving-hand {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  display: flex;

  .intro_hello_title {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 1.6px;
    font-family: ${sharedPreferences.fontsFamilies.secondaryFont};
  }

  .intro_hello_img {
    margin-left: 14px;
    position: relative;

    img {
      position: absolute;
      left: 0;
      top: -10px;
      animation: waving-hand 3500ms ease-out 200ms backwards;
      animation-iteration-count: 3;
    }
  }
`;

const SIntroContent = styled.h2`
  margin-top: 8px;
  font-size: 38px;
  font-weight: 300;

  span {
    font-weight: 600;
  }
`;

const SIntroDivider = styled.hr`
  width: 160px;
  margin: 30px 0;
`;

const SIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonIconStyles = css`
  margin-left: 10px;
`;

const Welcome = () => (
  <SWelcomePageContainer>
    <SIntro>
      <SIntroTitle>
        <span className="intro_hello_title">Hello</span>
        <div className="intro_hello_img">
          <img aria-hidden alt="waving-hand" height={48} src={WavingHandImage} width={48} />
        </div>
      </SIntroTitle>
      <SIntroContent>
        Welcome to <span>Gamma</span>
      </SIntroContent>
      <SIntroDivider />
      <Button use="text">
        Let&apos;s start
        <ArrowRightCircleIcon className={ButtonIconStyles} />
      </Button>
    </SIntro>
    <div>
      <Button use="text">
        Let&apos;s start
        <ArrowRightCircleIcon className={ButtonIconStyles} />
      </Button>
    </div>
  </SWelcomePageContainer>
);

export default Welcome;
