import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase'
import Footer from '../layout/footer/Footer';
// Data
import AdminLayoutData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';
import AdminSection from '../components/AdminSection/AdminSection';

function AdminDashboard() {
  // Hooks
  const { loadingTransition } = useLoading(2500);
  // Redux
  const {user: userSession} = useSelector(userSelector);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <>
            <Header>
              <HeroShowcase image={AdminLayoutData.adminDashboard.hero.image} imageAlt={AdminLayoutData.adminDashboard.hero.imageAlt} title={`${AdminLayoutData.studentDashboard.hero.title}, ${userSession?.user?.first_name}`} />
            </Header>
            <AdminSection />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default AdminDashboard;