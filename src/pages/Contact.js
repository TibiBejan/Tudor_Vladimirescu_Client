import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import DescriptiveSection from '../components/DescriptiveSection/DescriptiveSection';
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection';
import ContactSection from '../components/ContactSection/ContactSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
// Data
import ContactData from '../data/Contact.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Contact() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroShowcase image={ContactData.hero.image} imageAlt={ContactData.hero.imageAlt} title={ContactData.hero.title} />
            </Header>
            <CarouselSection data={ContactData.carouselSection} loaded={true} type="contact"/>
            {
              ContactData.descriptiveSection.map((entry) => (
                <DescriptiveSection key={entry.id} data={entry} background="#161615" accent="light"/>
              ))
            }
            <ShowcaseSection data={ContactData.showcaseSectionPrimary} justifyContent="start"/>
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

export default Contact