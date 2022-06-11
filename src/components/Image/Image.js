import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton'
import useImage from '../../hooks/useImage';
import { Label } from '../../utils/typography';
import 'react-loading-skeleton/dist/skeleton.css'
import { ImageWrapper, StyledError } from './Image.style';

function Image({ fileName, alt, ...rest }) {
    const { loading, error, image } = useImage(fileName)

    return (
        <ImageWrapper>
            {
                error && (
                    <StyledError>
                        <Label color="black" size="small">Something went wrong while loading the image...</Label>
                    </StyledError>
                )
            }
            {
                !error && loading && (
                    <Skeleton />
                ) 
            }
            {
               !error && image && (
                    <LazyLoadImage
                        alt={alt}
                        effect="opacity"
                        width={"100%"}
                        height={"100%"}
                        src={image} 
                        {...rest}
                    />
                )
            }
        </ ImageWrapper>
    )
}

export default Image;
