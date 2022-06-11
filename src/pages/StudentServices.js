import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import DssData from '../data/Dss.json';
import ContactSection from '../components/ContactSection/ContactSection';
// Hooks
import useLoading from '../hooks/useLoading';

function StudentServices() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={DssData.hero} />
            </Header>
            <AboutSection data={DssData.aboutSection} type="showcase"/>
            <ContactSection />
            <StatsSection />
            <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default StudentServices