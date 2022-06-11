import React from 'react';
import { HeadingThree } from '../../utils/typography';
import Image from '../Image/Image';
import { Label } from '../Navbar/Navbar.styles';
import { StyledSlide, StyledSlideInner, StyledContactImage, StyledLink } from './SlideContact.style';

function SlideContact({data}) {
    // Vars
    const nameWords = data.name.split(' ').length;
    const memberName = data.name.split(' ').map((el, index) => {
        if(index === nameWords - 1) {
            return el.toUpperCase();
        }
        return el;
    }).join('-');

    return (
        <StyledSlide>
            <StyledSlideInner>
                <StyledContactImage>
                    <Image fileName={data.image || `staff/${memberName}.png` || 'staff/placeholder.svg'} alt={data.imageAlt} />
                </StyledContactImage>
                {
                    data.position && (
                        <Label color="primaryYellow">{data.position}</Label>
                    )
                }
                <HeadingThree>{data.name}</HeadingThree>
                <StyledLink 
                    to='#'
                    onClick={(e) => {
                        window.location.href = `mailto:${data.email}`;
                        e.preventDefault();
                    }}
                >
                    <Label color="white" weight="bold">{data.email}</Label>
                </StyledLink>
            </StyledSlideInner>
        </StyledSlide>
    )
}

export default SlideContact;