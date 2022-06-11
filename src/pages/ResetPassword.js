import React from 'react';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
import ResetPwdSection from '../components/ResetPwdSection/ResetPwdSection';
import StatsSection from '../components/StatsSection/StatsSection';
import MapSection from '../components/MapSection/MapSection';
import Footer from '../layout/footer/Footer';
// Data
import AuthData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';

function ResetPassword() {
    // Hooks
    const { loadingTransition } = useLoading(2500);

    return (
        <>
            <IntroOverlay />
            {
                !loadingTransition && (
                    <>
                        <Header>
                            <HeroShowcase image={AuthData.resetPassword.hero.image} imageAlt={AuthData.resetPassword.hero.imageAlt} title={AuthData.resetPassword.hero.title} />
                        </Header>
                        <ResetPwdSection />
                        <StatsSection />
                        <MapSection loaded={true} label="Tudor Vladimirescu University Campus"/>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default ResetPassword;