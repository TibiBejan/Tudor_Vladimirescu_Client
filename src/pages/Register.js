import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
import RegisterSection from '../components/RegisterSection/RegisterSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
// Data
import AuthData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';

function Register() {
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
                            <HeroShowcase image={AuthData.register.hero.image} imageAlt={AuthData.register.hero.imageAlt} title={AuthData.register.hero.title} />
                        </Header>
                        <RegisterSection />
                        <StatsSection />
                        <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Register;