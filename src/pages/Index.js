import React from 'react';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection';
import Footer from '../layout/footer/Footer';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Hero from '../components/Hero/Hero';
// Data
import HomepageData from '../data/Homepage.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Index() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
            <>
              <Header>
                <Hero data={HomepageData.hero} />
              </Header>
              <AboutSection data={HomepageData.aboutSection} type="showcase"/>
              <CarouselSection data={HomepageData.carouselSection} loaded={true} type="descriptive"/>
              <ShowcaseSection data={HomepageData.showcaseSectionPrimary} justifyContent="start"/>
              <ShowcaseSection data={HomepageData.showcaseSectionSecondary} justifyContent="end" />
              <StatsSection />
              <MapSection loaded={true} />
              <Footer />
            </>
          )
      }
    </>
  )
}

export default Index