import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
import LoginSection from '../components/LoginSection/LoginSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
// Data
import AuthData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Login() {
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
                            <HeroShowcase image={AuthData.login.hero.image} imageAlt={AuthData.login.hero.imageAlt} title={AuthData.login.hero.title} />
                        </Header>
                        <LoginSection />
                        <StatsSection />
                        <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Login;