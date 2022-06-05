import React from 'react';

import { styled } from '@linaria/react';

import detectMobileAndTablet from '../../utils/detectMobileAndTablet';
import Navbar from '../Navbar';
import SideBar from '../SideBar';

const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const isDesktop = !detectMobileAndTablet(windowWidth);
  console.log('-----isDesktop', isDesktop);

  const handleWindowSizeChange = () => setWindowWidth(window.innerWidth);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, [windowWidth]);

  return (
    <SHeader>
      <>
        <SBurger aria-controls="sidebar" open={open} onClick={() => setOpen(!open)} />
        <SideBar isSideBarOpen={open} setIsSideBarOpen={setOpen} />
      </>
      <SWrapper>
        <Navbar />
      </SWrapper>
    </SHeader>
  );
};

export default React.memo(Header);

const SHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  background: var(--bg-color);
  display: flex;
`;

const SWrapper = styled.div`
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 2.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SBurger = styled.button<{ open: boolean }>`
  margin: 0 auto;

  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    fill: var(--secondary-color);
  }
`;
