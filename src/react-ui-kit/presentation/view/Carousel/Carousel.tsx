import React, { memo } from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Panel from '../Panel';
import { sharedPreferences } from '../styles/sharedPreferences';

const mockItems = [
  { text: 'test', id: 1 },
  { text: 'test 2', id: 2 },
  { text: 'test 3', id: 3 },
  { text: 'test 4', id: 4 },
  { text: 'test 5', id: 5 },
  { text: 'test 6', id: 6 },
];

const Carousel = () => (
  <SLiveSliderContainer>
    <Swiper
      navigation
      breakpoints={{
        [sharedPreferences.breakpoints.xs]: {
          slidesPerView: 1.3,
          spaceBetween: 60,
        },
        [sharedPreferences.breakpoints.sm]: {
          slidesPerView: 1.7,
          spaceBetween: 60,
        },
        [sharedPreferences.breakpoints.md]: {
          slidesPerView: 2.5,
          spaceBetween: 60,
        },
        [sharedPreferences.breakpoints.lg]: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
      }}
      className="swiper-container"
      modules={[Navigation, A11y]}
      speed={1300}
    >
      {mockItems.map((item) => (
        <SwiperSlide key={item.id}>
          <Panel className={PanelStyles}>{item.text}</Panel>
        </SwiperSlide>
      ))}
    </Swiper>
  </SLiveSliderContainer>
);

export default memo(Carousel);

const PanelStyles = css`
  background-color: #fff;
  height: 440px;
  width: 380px;
`;

const SLiveSliderContainer = styled.div`
  padding-top: 20px;
  .swiper-container {
    padding-top: 20px;
    padding-bottom: 80px;
    position: relative;
    padding-left: 20px;
    .swiper-button-next {
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translateX(75%);
      &::after {
        content: ' ';
        display: block;

        background-image: url('data:image/svg+xml; utf8, <svg fill="black" aria-label="arrow right icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fillRule="evenodd"/></svg>');
        background-size: 28px 28px;
        height: 28px;
        width: 28px;

        cursor: pointer;
      }
      &.swiper-button-disabled {
        &::after {
          content: ' ';
          display: block;

          background-image: url('data:image/svg+xml; utf8, <svg fill="grey" aria-label="arrow right icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" fillRule="evenodd"/></svg>');
          background-size: 28px 28px;
          height: 28px;
          width: 28px;

          cursor: default;
        }
      }
    }
    .swiper-button-prev {
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translateX(-75%);
      &::after {
        content: ' ';
        display: block;

        background-image: url('data:image/svg+xml; utf8, <svg fill="black" aria-label="arrow left icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" > <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" fillRule="evenodd" /></svg>');
        background-size: 28px 28px;
        height: 28px;
        width: 28px;

        cursor: pointer;
      }
      &.swiper-button-disabled {
        &::after {
          content: ' ';
          display: block;

          background-image: url('data:image/svg+xml; utf8, <svg fill="grey" aria-label="arrow left icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" > <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" fillRule="evenodd" /></svg>');
          background-size: 28px 28px;
          height: 28px;
          width: 28px;

          cursor: default;
        }
      }
    }
  }

  .swiper-slide-active {
  }

  .swiper-slide-prev,
  .swiper-slide-next {
  }
`;
