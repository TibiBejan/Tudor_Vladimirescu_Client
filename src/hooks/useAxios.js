import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useAxios = (url, method, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
      controllerRef.current.abort();
    };

    useEffect(() => {
      (async () => {
        try {
          const response = await axios.request({
            data: payload,
            signal: controllerRef.current.signal,
            method,
            url, 
          });
          setData(response.data.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, [url, method, payload]);
    return { cancel, data, error, loaded };
};

export default useAxios;