import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@linaria/react';

import { transition } from '../../utils/transition';
import { sharedPreferences } from '../styles/sharedPreferences';

const Navbar = () => (
  <StyledNav>
    <Link className="nav-link" to="/#about">
      About Me
    </Link>
    <Link className="nav-link" to="/#projects">
      Features
    </Link>
    <Link className="nav-link" to="/#contact">
      Contact
    </Link>
  </StyledNav>
);

export default React.memo(Navbar);

const StyledNav = styled.nav`
  display: none;
  @media (min-width: ${sharedPreferences.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
  }
  .nav-link {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    color: var(--secondary-color);
    padding: 0;
    &::before {
      content: '';
      transition: ${transition('all')};
      height: 0.15rem;
      position: absolute;
      background-color: var(--secondary-color);
      width: 0%;
      bottom: -0.2rem;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
