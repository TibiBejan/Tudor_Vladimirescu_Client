import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection';
import DescriptiveSection from '../components/DescriptiveSection/DescriptiveSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import AboutData from '../data/About.json';
// Hooks
import useLoading from '../hooks/useLoading';

function About() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={AboutData.hero}/>
            </Header>
            <CarouselSection data={AboutData.carouselSection} loaded={true} type="showcase"/>
            {
              AboutData.descriptiveSection.map((entry) => (
                <DescriptiveSection key={entry.id} data={entry} background="#161615" accent="light"/>
              ))
            }
            <ShowcaseSection data={AboutData.showcaseSectionPrimary} justifyContent="start"/>
            <ShowcaseSection data={AboutData.showcaseSectionSecondary} justifyContent="end" />
            <StatsSection />
            <MapSection loaded={true} />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default About