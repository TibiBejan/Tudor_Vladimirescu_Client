import React from 'react';
// Components
import IntroOverlay from '../utils/IntroOverlay';
// Hooks
import useLoading from '../hooks/useLoading';

function AdminDashboard() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <h1>AdminDashboard</h1>
        )
      }
    </>
  )
}

export default AdminDashboard;