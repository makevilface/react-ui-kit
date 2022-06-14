import React from 'react';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import AppleWatchImg from '../../../../assets/apple-watch.jpeg';
import Modal from '../Modal';
import { sharedPreferences } from '../styles/sharedPreferences';

type TPromoProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  handleRequestClose: () => void;
};

const Promo = ({ isOpen, handleRequestClose }: Readonly<TPromoProps>) => (
  <Modal handleRequestClose={handleRequestClose} isOpen={isOpen}>
    <img aria-label="Apple watch image" className={PromoImgStyles} loading="lazy" src={AppleWatchImg} />

    <SPromoContent>
      <p className="PromoContent__title">Apple Watch с самым большим дисплеем.</p>
      <h2 className="PromoContent__main">Более чем на 50% увеличена область просмотра по сравнению с Series 3.</h2>
    </SPromoContent>
  </Modal>
);

export default React.memo(Promo);

const SPromoContent = styled.div`
  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    width: 300px;
  }
  width: 450px;
  margin-left: 70px;
  .PromoContent__title {
    font-family: ${sharedPreferences.fontsFamilies.primaryFont};
    font-size: 17px;
    line-height: 1.2353641176;
    font-weight: 600;
    letter-spacing: -0.016em;

    margin-top: 20px;
    margin-bottom: 18px;
  }

  .PromoContent__main {
    background: linear-gradient(90deg, #79b588, #3e593f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${sharedPreferences.fontsFamilies.primaryFont};
    font-size: 60px;
    line-height: 1.05;
    font-weight: 600;
    letter-spacing: -0.015em;

    @media (max-width: ${sharedPreferences.breakpoints.md}) {
      font-size: 45px;
    }
  }
`;

const PromoImgStyles = css`
  min-height: 350px;
  height: 500px;

  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    height: 350px;
  }
`;
