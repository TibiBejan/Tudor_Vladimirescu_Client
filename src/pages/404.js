import React from 'react';
// Components
import IntroOverlay from '../utils/IntroOverlay';
// Hooks
import useLoading from '../hooks/useLoading';

function Page404() {
  // Hooks
  const { loadingTransition } = useLoading(2500);

  return (
    <>
      <IntroOverlay />
      {
        !loadingTransition && (
          <div>404 Error page</div>
        )
      }
    </>
  )
}

export default Page404