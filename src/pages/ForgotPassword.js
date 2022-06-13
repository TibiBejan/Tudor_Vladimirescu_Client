import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
import ForgotPwdSection from '../components/ForgotPwdSection/ForgotPwdSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
// Data
import AuthData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';

function ForgotPassword() {
  // Hooks
  const { loadingTransition } = useLoading(2500);
  // Location props
  const location = useLocation();
  // Redux
  const { user: userSession } = useSelector(userSelector);
  if(userSession?.token) {
      return (
          <Navigate to="/" state={{from: location}} replace />
      )
  }

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
                <HeroShowcase image={AuthData.forgotPassword.hero.image} imageAlt={AuthData.forgotPassword.hero.imageAlt} title={AuthData.forgotPassword.hero.title} />
            </Header>
            <ForgotPwdSection />
            <StatsSection />
            <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default ForgotPassword;