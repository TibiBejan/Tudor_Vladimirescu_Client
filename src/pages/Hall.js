import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Navigate } from "react-router-dom";
import axios from 'axios';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import CarouselSection from '../components/CarouselSection/CarouselSection';
import HallSection from '../components/HallSection/HallSection';
import ContactSection from '../components/ContactSection/ContactSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
// Hooks
import useLoading from '../hooks/useLoading';

function Hall() {
  // Hooks
  const { loadingTransition } = useLoading(2500);
  // Route Params
  const { hallId } = useParams();
  const location = useLocation();
  // State
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  // Effect
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          method: 'GET', 
          url: `${process.env.REACT_APP_API_URL}/hall/${hallId}`,
          withCredentials: true,  
        });
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [hallId]);

  if(loaded && error) {
    return (
      <Navigate to="/404" state={{from: location}} replace />
    )
  }

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroShowcase image={`halls/residence-hall-${hallId}.jpg`} imageAlt={`Residence Hall ${hallId.toUpperCase()}`} title={`Residence Hall ${hallId.toUpperCase()}`}/>
            </Header>
            <HallSection data={data} loaded={loaded} error={error}/>
            <CarouselSection data={loaded && {slides: data?.HallStaffs}} loaded={loaded} error={error} type="contact"/>
            <ContactSection />
            <StatsSection />
            <MapSection data={data} error={error} loaded={loaded} label={`Residence Hall ${hallId.toUpperCase()}`} />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Hall