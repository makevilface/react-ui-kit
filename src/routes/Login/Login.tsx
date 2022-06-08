import React from 'react';
import { Link } from 'react-router-dom';

import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { Button } from '../../react-ui-kit/presentation/view';
import { ChevronLeftIcon, GoogleIcon, MailIcon, PhoneIcon } from '../../react-ui-kit/presentation/view/Icon';

const SLoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const SLogin = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 24px rgb(0 0 0 / 5%);
  border-radius: 16px;
  width: 100%;
  min-height: 200px;
  position: relative;
`;

const SGoBackButton = css`
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

  & .go-back-icon {
    width: 20px;
    height: 20px;
  }
`;

const SLoginTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const IconStyles = css`
  height: 24px;
  width: 24px;
`;

const Login = () => (
  <SLoginPageContainer>
    <SLogin>
      <Link className={SGoBackButton} to="/home">
        <ChevronLeftIcon className="go-back-icon" />
      </Link>
      <div>
        <h1>You can enter with</h1>
        <SLoginTypeContainer>
          <Button justifyContent="flex-end" use="primary">
            <MailIcon className={IconStyles} />
            Email
          </Button>
          <Button use="social">
            <PhoneIcon className={IconStyles} />
            Phone number
          </Button>
          <Button disabled loading use="social">
            <GoogleIcon className={IconStyles} />
            Google
          </Button>
        </SLoginTypeContainer>
      </div>
    </SLogin>
  </SLoginPageContainer>
);

export default Login;
