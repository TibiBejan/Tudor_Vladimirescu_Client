import React from 'react';
import Image from '../Image/Image';
import { StyledImageWrapper, StyledImageInner } from './SlideShowcase.style';

function SlideShowcase({data}) {
  return (
    <StyledImageWrapper>
        <StyledImageInner>
            <Image fileName={data.image} alt={data.imageAlt} />
        </StyledImageInner>
    </StyledImageWrapper>
  )
}

export default SlideShowcase;