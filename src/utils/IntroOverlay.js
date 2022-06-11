import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { HeadingThree } from './typography';

const StyledOverlay = styled.div`
    background-color: transparent;
`;

const StyledOverlayTop = styled.div`
    height: 50vh;
    position: absolute;
    width: 100%;
    z-index: 2000;
`;

const StyledBoxTop = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 33.333%;
    background-color: ${props => props.theme.colors.brownShadeBlack};

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        width: 100%;
    }

    &:nth-child(2) {
        left: 33.333%;

        @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
            display: none;
        }
    }

    &:nth-child(3) {
        left: 66.666%;

        @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
            display: none;
        }
    }
`;

const StyledOverlayBottom = styled.div`
    height: 50vh;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2000;
`;

const StyledBoxBottom = styled.div`
    position: absolute;
    bottom: 0;
    right: 66.666%;
    height: 100%;
    width: 33.333%;
    background-color: ${props => props.theme.colors.brownShadeBlack};

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        right: 0;
        width: 100%;
    }

    &:nth-child(2) {
        right: 33.333%;

        @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
            width: 100%;
            top: 100%;
            right: 0;
        }
    }

    &:nth-child(3) {
        right: 0;

        @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
            width: 100%;
            top: 200%;
        }
    }
`;

const StyledHeadingWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 66.666%;
    height: 50vh;
    z-index: 2001;
`;

const StyledHeadingInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledHeadingOverlay = styled.div`
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate(-35%, -35%);
    width: max-content;
    height: min-content;
    overflow: hidden;

    ${HeadingThree} {
        display: flex;
        flex-flow: column;
    }
`;

function IntroOverlay() {
    // Effect
    useEffect(() => {
        // Fix flickering on animation
        gsap.to("body", 0, { css: { visibility: "visible"} });

        const tl = gsap.timeline();
        tl.to("body", 0, {
            css: {overflow: "hidden"},
        }).from('.heading label', 1.75, {
            opacity: 0,
            y: 100,
            ease: 'power4.out',
            delay: 0.5,
            skewY: 7,
            stagger: {
                amount: 0.2
            }
        }).to('.heading label', 1.25, {
            opacity: 0,
            ease: 'power4.out',
            delay: 0.5,
            stagger: {
                amount: 0.2
            }
        }).to('.overlay-top', 1.75, {
            height: 0,
            ease: 'expo.inOut',
            stagger: {
                amount: 0.25
            }
        }).to('.overlay-bottom', 1.75, {
            width: 0,
            ease: 'expo.inOut',
            delay: -0.8,
            stagger: {
                amount: 0.25
            }
        }).to(".overlay", 0, {
            css: { display: "none" }
        }).to("body", 0, {
            css: {overflow: "auto"},
        });
    }, []);

    return (
        <StyledOverlay className='overlay'>
            <StyledHeadingWrapper>
                <StyledHeadingInner>
                    <StyledHeadingOverlay>
                        <HeadingThree className='heading'>
                            <label>Tudor Vladimirescu is one of the largest student</label>
                            <label>campuses in Romania</label>
                        </HeadingThree>
                    </StyledHeadingOverlay>
                </StyledHeadingInner>
            </StyledHeadingWrapper>
            <StyledOverlayTop>
                <StyledBoxTop className='overlay-top'/>
                <StyledBoxTop className='overlay-top'/>
                <StyledBoxTop className='overlay-top'/>
            </StyledOverlayTop>
            <StyledOverlayBottom>
                <StyledBoxBottom className='overlay-bottom'/>
                <StyledBoxBottom className='overlay-bottom'/>
                <StyledBoxBottom className='overlay-bottom'/>
            </StyledOverlayBottom>
        </StyledOverlay>
    )
}

export default IntroOverlay;