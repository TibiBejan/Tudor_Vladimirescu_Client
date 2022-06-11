import React, { useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import { HeadingFour, HeadingOne, Label, Paragraph } from '../../utils/typography';
import Image from '../Image/Image';
import Button from '../../layout/button/Button';
import { HeroWrapper, HeroImage, HeroContentOverlay, HeroContent, HeroContentNavbar, HeroContentDescription, HeroContentNavbarInner, StyledButton, StyledIcon, ButtonWrapper, HeroContentDescriptionInner } from './HeroSmall.style';


function HeroSmall({data}) {
    // Ref
    const heroRef = useRef(null);
    // Functions
    const scrollToContent = () => {
        const heroHeight = heroRef.current.getBoundingClientRect().height - 85; // Height of hero block - navbar height (hardcoded)
        window.scrollTo(0, heroHeight);
    }

    return (
        <HeroWrapper ref={heroRef}>
            <HeroImage>
                <Image fileName={data.image} imageAlt={data.imageAlt}/>
                <HeroContentOverlay>
                    <HeadingOne>{data.title}</HeadingOne>
                </HeroContentOverlay>
            </HeroImage>
            <HeroContent>
                <HeroContentNavbar>
                    <HeroContentNavbarInner>
                        <StyledButton type="button" onClick={scrollToContent}>
                            <StyledIcon>
                                <IconContext.Provider value={{size: "1.8rem", color: "#231f20"}}>
                                    <FiArrowDown className='discover-button-icon'/>
                                </IconContext.Provider>
                            </StyledIcon>
                            <Label size="small" weight="bold" color="black">Discover...</Label>
                        </StyledButton>
                        <ButtonWrapper>
                            <Button linkPath="/contact-us" textLabel="Contact Us" background="#7c6f63" size="small"/>
                        </ButtonWrapper>
                    </HeroContentNavbarInner>
                </HeroContentNavbar>
                <HeroContentDescription>
                    <HeroContentDescriptionInner>
                        <HeadingFour dark>{data.subtitle}</HeadingFour>
                        {
                            data.paragraph.map((paragraphEntry, index) => (
                                <Paragraph key={index}>{paragraphEntry}</Paragraph>
                            ))
                        }
                    </HeroContentDescriptionInner>
                </HeroContentDescription>
            </HeroContent>
        </HeroWrapper>
    )
}

export default HeroSmall;