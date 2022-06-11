import React from 'react';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ShowcaseWideSection from '../components/ShowcaseWideShowcase/ShowcaseWideSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import Image from '../components/Image/Image';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import SportbaseData from '../data/Sportbase.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Sportbase() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={SportbaseData.hero} />
            </Header>
            <CarouselSection data={SportbaseData.carouselSection} loaded={true} type="showcase"/>
            <AboutSection data={SportbaseData.aboutSection} type="descriptive"/>
            <ShowcaseWideSection data={SportbaseData.showcaseWide} showcase={<Image fileName="sportbase/sportbase-2.jpg" alt="Tudor Vladimirescu Football Field"/>}/>
            <StatsSection />
            <MapSection data={SportbaseData.mapSection} loaded={true} label="Tudor Vladimirescu Sportbase"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Sportbase