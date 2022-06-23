import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { BsShieldFillCheck, BsFillXSquareFill } from 'react-icons/bs';
import { HeadingFour, Paragraph } from '../../../../utils/typography';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledChecker, StyledCheckerInner, StyledContentBlock, SkeletonWrapper } from './StudentChecker.style';

function StudentChecker({ URL, label, setIncompleteTasks }) {
    // State
    const [ data, setData ] = useState({});
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    // Effect
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await axios.request({
                    method: 'GET', 
                    url: URL,
                    withCredentials: true,
                });
                if(response.status === 200 || response.status === 201) {
                    setData(response.data.data);
                    setError(null);
                } 
            }
            catch(error) {
                setError(error.response.data.message)
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        if(!loading && error) {
            setIncompleteTasks(prevState => [...prevState, {task: label}]);
        }
    }, [loading, error, label])

    return (
        <StyledChecker>
            {
                loading 
                    ? (
                        <SkeletonWrapper>
                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                        </SkeletonWrapper>
                    )
                    : (
                        <StyledCheckerInner>
                            <StyledContentBlock>
                                <HeadingFour dark>{label}</HeadingFour>
                                <Paragraph>{error ? error : 'Your personal information is updated.'}</Paragraph>
                            </StyledContentBlock>
                            <StyledContentBlock>
                                <HeadingFour dark>
                                    {Object.keys(data).length !== 0 ? 'Complete' : 'Incomplete'}
                                    <IconContext.Provider value={{size: '2.5rem', color: Object.keys(data).length !== 0 ? 'green' : 'red'}}>
                                        {Object.keys(data).length !== 0 ? <BsShieldFillCheck /> : <BsFillXSquareFill />}
                                    </IconContext.Provider>
                                </HeadingFour>
                            </StyledContentBlock>
                        </StyledCheckerInner>
                    )
               
            }
        </StyledChecker>
    )
}

export default StudentChecker;