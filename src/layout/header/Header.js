import React from 'react';
import { HeaderWrapper } from './Header.styles';
import Navbar from '../../components/Navbar/Navbar';

function Header({children}) {
  return (
    <HeaderWrapper>
      <Navbar />
      {children}
    </HeaderWrapper>
  )
}

export default Header;