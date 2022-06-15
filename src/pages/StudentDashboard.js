import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/user/userSlice';
// Components
import IntroOverlay from '../utils/IntroOverlay';
import Header from '../layout/header/Header';
import HeroShowcase from '../components/HeroShowcase/HeroShowcase';
import StudentSection from '../components/StudentSection/StudentSection';
import Footer from '../layout/footer/Footer';
// Data
import StudentLayoutData from '../data/Auth.json';
// Hooks
import useLoading from '../hooks/useLoading';

function StudentDashboard() {
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
              <HeroShowcase image={StudentLayoutData.studentDashboard.hero.image} imageAlt={StudentLayoutData.studentDashboard.hero.imageAlt} title={`${StudentLayoutData.studentDashboard.hero.title}, ${userSession?.user?.first_name}`} />
            </Header>
            <StudentSection />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default StudentDashboard