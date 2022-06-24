import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from '../../Image/Image';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { HeadingThree, Label, Paragraph } from '../../../utils/typography';
import { StyledHalls, StyledHallsHeading, StyledHallsContent, StyledHallsInner, StyledHallsGrid, StyledMessageWrapper, StyledMessage, HallWrapper, HallActionLink, SkeletonWrapper, StyledLink } from './Halls.style';

function Halls() {
    // State
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    // Effect
    useEffect(() => {
        (async () => {
        try {
            const response = await axios.request({
                method: 'GET', 
                url: `${process.env.REACT_APP_API_URL}/hall/all`,
                withCredentials: true,  
            });
            setData(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
        })();
    }, []);

    return (
        <StyledHalls>
            <StyledHallsHeading>
                <HeadingThree dark>Residence halls</HeadingThree>
                <Paragraph size="large" color="black">Using this panel, you can browse all the Residence Halls</Paragraph>
                {error && (
                    <StyledMessageWrapper background>
                        <StyledMessage>{error}</StyledMessage>
                    </StyledMessageWrapper>
                )}
            </StyledHallsHeading>
            <StyledHallsContent>
                <StyledHallsInner>
                    <StyledHallsGrid>
                        {
                            !loaded && (
                                <SkeletonWrapper>
                                    <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                </SkeletonWrapper>
                            )
                        }
                        {
                            loaded && data.length !== 0 && data.map(el => (
                                <StyledLink key={el.hall_number} to={`/halls/t${el.hall_number}`}>
                                    <HallWrapper>
                                        <Image fileName={`halls/residence-hall-t${el.hall_number}.jpg`} alt={`Residence Hall ${el.hall_name}`}/>
                                        <HallActionLink>
                                            <Label size="large" fontWeight="bold" uppercase>Residence Hall {el.hall_name}</Label>
                                        </HallActionLink>
                                    </HallWrapper>
                                </StyledLink>
                            ))
                        }
                    </StyledHallsGrid>
                </StyledHallsInner>
            </StyledHallsContent>
        </ StyledHalls>
    )
}

export default Halls;