import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@linaria/react';

import { transition } from '../../utils/transition';
import { sharedPreferences } from '../styles/sharedPreferences';

type TSideBarProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }: Readonly<TSideBarProps>) => (
  <SContainer aria-hidden={!isSideBarOpen} open={isSideBarOpen} tabIndex={isSideBarOpen ? 1 : -1}>
    <SNav>
      <Link className="nav-link" to="/#about" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <span>Введение</span>
      </Link>
      <Link className="nav-link" to="/#projects" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <span>Features</span>
      </Link>
      <Link className="nav-link" to="/#contact" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <span>Contact</span>
      </Link>
    </SNav>
  </SContainer>
);

export default React.memo(SideBar);

const SContainer = styled.div<{ open: boolean }>`
  display: block;
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  outline: 0;
  z-index: 10;
  transition: ${transition('all')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  /* @media (min-width: ${sharedPreferences.breakpoints.lg}) {
    display: none;
  } */
`;

const SNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  height: 100vh;
  width: 20%;
  text-align: left;
  padding: 2rem;
  position: relative;
  left: 0;
  transition: ${transition('all')};
  margin-right: auto;
  a {
    color: #ed2945;
    &:hover {
      text-decoration: underline;
    }
    span {
      color: #000000;
    }
  }
  .nav-link {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    padding: 1.5rem 0;
  }
`;
