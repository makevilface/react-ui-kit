import React from 'react';
import ReactDOM from 'react-dom';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import AppleWatchImg from '../../../assets/apple-watch.jpeg';
import { useLockScroll } from '../../utils/hooks/useLockScroll';
import { useOnEscPress } from '../../utils/hooks/useOnEscPress';
import { usePreparePortal } from '../../utils/hooks/usePreparePortal';
import { CloseIcon } from '../Icon';
import { sharedPreferences } from '../styles/sharedPreferences';
import Tooltip from '../Tooltip';

type TPromoProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  handleRequestClose: () => void;
};

const Promo = ({ isOpen, handleRequestClose }: Readonly<TPromoProps>): React.ReactPortal | null => {
  const rootEl = usePreparePortal();

  useLockScroll(!!(isOpen && rootEl));

  const handleEscKeydownEvent = useOnEscPress(handleRequestClose);

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscKeydownEvent);
    return () => window.removeEventListener('keydown', handleEscKeydownEvent);
  }, []);

  if (isOpen && rootEl) {
    return ReactDOM.createPortal(
      <SWrapper>
        <SOverlay role="button" tabIndex={0} onClick={handleRequestClose} />
        <SPromoWrapper>
          <Tooltip delayToShow={2} placement="left" text="close">
            <SCloseButton onClick={handleRequestClose}>
              <CloseIcon className="Icon--close" />
            </SCloseButton>
          </Tooltip>

          <img aria-label="Apple watch image" className={PromoImgStyles} loading="lazy" src={AppleWatchImg} />

          <SPromoContent>
            <p className="PromoContent__title">Apple Watch с самым большим дисплеем.</p>
            <h2 className="PromoContent__main">
              Более чем на 50% увеличена область просмотра по сравнению с Series 3.
            </h2>
          </SPromoContent>
        </SPromoWrapper>
      </SWrapper>,
      rootEl,
    );
  }

  return null;
};

export default React.memo(Promo);

const SWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const SOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: var(--overlay-bg-color);
  cursor: pointer;
  user-select: none;
`;

const SPromoWrapper = styled.section`
  min-height: 500px;
  height: 90%;
  width: 80%;
  background-color: #fff;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

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

const SCloseButton = styled.button`
  height: 42px;
  width: 42px;

  cursor: pointer;
  background-color: #fff;

  position: absolute;
  left: -21px;
  top: 26px;

  user-select: none;
  z-index: 2;

  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgb(0 0 0 / 12%);

  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
  transition-property: box-shadow, transform;

  &:hover,
  &:focus {
    box-shadow: 0 4px 12px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 10%);
  }

  &:active {
    transform: scale(0.96);
  }

  & .Icon--close {
    width: 38px;
    height: 38px;
  }
`;
