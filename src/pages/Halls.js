import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import HallsData from '../data/Halls.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Halls() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={HallsData.hero} />
            </Header>
            <CarouselSection data={HallsData.carouselSection} loaded={true} type="descriptive"/>
            <StatsSection />
            <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Halls