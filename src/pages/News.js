import React from 'react'
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import NewsSection from '../components/NewsSection/NewsSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroSmall from '../components/HeroSmall/HeroSmall';
// Data
import NewsData from '../data/News.json';
// Hooks
import useLoading from '../hooks/useLoading';

function News() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroSmall data={NewsData.hero} />
            </Header>
            <NewsSection data={NewsData.posts}/>
            <StatsSection />
            <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default News;