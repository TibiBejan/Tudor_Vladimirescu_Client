import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import DescriptiveSection from '../components/DescriptiveSection/DescriptiveSection';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
// Data
import AccommodationData from '../data/Accommodation.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Accommodation() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroShowcase image={AccommodationData.hero.image} imageAlt={AccommodationData.hero.imageAlt} title={AccommodationData.hero.title} />
            </Header>
            {
              AccommodationData.descriptiveSection.map((entry) => (
                <DescriptiveSection key={entry.id} data={entry} background="#161615" accent="light" noMargin/>
              ))
            }
            <CarouselSection data={AccommodationData.carouselSection} loaded={true} type="descriptive"/>
            <StatsSection />
            <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Accommodation