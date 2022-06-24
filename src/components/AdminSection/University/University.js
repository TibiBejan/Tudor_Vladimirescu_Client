import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from '../../Image/Image';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { HeadingThree, Label, Paragraph } from '../../../utils/typography';
import { StyledUniversities, StyledUniversitiesHeading, StyledUniversitysContent, StyledUniversitysInner, StyledUniversitysGrid, UniversityWrapper, StyledMessageWrapper, StyledMessage, StyledLink, SkeletonWrapper, UniversityActionLink } from './University.style';

function University() {
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
                url: `${process.env.REACT_APP_API_URL}/university/all`,
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

    console.log(data);

    return (
        <StyledUniversities>
            <StyledUniversitiesHeading>
                <HeadingThree dark>Universities</HeadingThree>
                <Paragraph size="large" color="black">Using this panel, you can browse all the Universities</Paragraph>
                {error && (
                    <StyledMessageWrapper background>
                        <StyledMessage>{error}</StyledMessage>
                    </StyledMessageWrapper>
                )}
            </StyledUniversitiesHeading>
            <StyledUniversitysContent>
                <StyledUniversitysInner>
                    <StyledUniversitysGrid>
                        {
                            !loaded && (
                                <SkeletonWrapper>
                                    <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                </SkeletonWrapper>
                            )
                        }
                        {
                            loaded && data.length !== 0 && data.map(el => (
                                <StyledLink key={el.id} to="/admin">
                                    <UniversityWrapper>
                                        <Image fileName="university/placeholder-university.jpg" alt={`${el.title}`}/>
                                        <UniversityActionLink>
                                            <Label size="large" fontWeight="bold" uppercase>{el.title}</Label>
                                        </UniversityActionLink>
                                    </UniversityWrapper>
                                </StyledLink>
                            ))
                        }
                    </StyledUniversitysGrid>
                </StyledUniversitysInner>
            </StyledUniversitysContent>
        </ StyledUniversities>
    )
}

export default University;