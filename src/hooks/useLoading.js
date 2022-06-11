import { useState, useEffect } from 'react';

const useLoading = (duration) => {
    // State
    const [ loadingTransition, setLoadingTransition ] = useState(true);
    // Effect
    useEffect(() => {
        setTimeout(() => {
            setLoadingTransition(false);
        }, duration);
    }, []);
    return { loadingTransition };
};

export default useLoading;