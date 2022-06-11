import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import IntroOverlay from '../utils/IntroOverlay';
// Hooks
import useLoading from '../hooks/useLoading';

function Unauthorized() {
    // Hooks
    const { loadingTransition } = useLoading(2500);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <IntroOverlay />
            {
                !loadingTransition && (
                    <>
                        <h1>Unauthorized</h1>
                        <button onClick={goBack}>Go back</button>
                    </>    
                )
            }
        </>
    )
}

export default Unauthorized;