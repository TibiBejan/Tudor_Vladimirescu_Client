import React from 'react';
import { HeaderWrapper } from './Header.styles';
import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/Hero/Hero';
// import HeroSmall from '../../components/HeroSmall/HeroSmall';
// import HeroShowcase from '../../components/HeroShowcase/HeroShowcase';
// Data
import LayoutData from '../../data/Layout.json';

function Header({children}) {
  return (
    <HeaderWrapper>
      <Navbar data={LayoutData.navbar} />
      {children}
    </HeaderWrapper>
  )
}

export default Header

// {
//   data.hero.type === 'primary' && (<Hero data={data.hero} />)
// }
// {
//   data.hero.type === 'secondary' && (<HeroSmall data={data.hero} />)
// }
// {
//   data.hero.type === 'showcase' && (<HeroShowcase data={data.hero} image={} imageAlt={} />)
// }