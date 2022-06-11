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
import Youtube from '../layout/youtube/Youtube';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import CafetariaData from '../data/Cafetaria.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Cafetaria() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={CafetariaData.hero} />
            </Header>
            <CarouselSection data={CafetariaData.carouselSection} loaded={true} type="showcase"/>
            <AboutSection data={CafetariaData.aboutSection} type="descriptive"/>
            <ShowcaseWideSection data={CafetariaData.showcaseWide} showcase={< Youtube videoId="SM2XW-vaUT4"/>}/>
            <StatsSection />
            <MapSection data={CafetariaData.mapSection} loaded={true} label="Tudor Vladimirescu Canteen"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Cafetaria