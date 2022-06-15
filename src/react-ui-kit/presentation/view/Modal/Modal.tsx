import React from 'react';
import ReactDOM from 'react-dom';

import { styled } from '@linaria/react';

import { useLockScroll } from '../../utils/hooks/useLockScroll';
import { useOnEscPress } from '../../utils/hooks/useOnEscPress';
import { usePreparePortal } from '../../utils/hooks/usePreparePortal';
import { CloseIcon } from '../Icon';
import Tooltip from '../Tooltip';

type TModalProps = {
  isOpen: boolean;
  handleRequestClose: () => void;
  children: React.ReactNode;
  withCloseButton?: boolean;
};

const Modal = ({
  isOpen,
  handleRequestClose,
  children,
  withCloseButton = true,
}: Readonly<TModalProps>): React.ReactPortal | null => {
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
        <SModalWrapper>
          {withCloseButton && (
            <Tooltip delayToShow={2} placement="left" text="close">
              <SCloseButton onClick={handleRequestClose}>
                <CloseIcon className="Icon--close" />
              </SCloseButton>
            </Tooltip>
          )}
          {children}
        </SModalWrapper>
      </SWrapper>,
      rootEl,
    );
  }

  return null;
};

export default React.memo(Modal);

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

const SModalWrapper = styled.section`
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
