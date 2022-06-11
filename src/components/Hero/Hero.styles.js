import styled from 'styled-components';
import { HeadingOne, Paragraph } from '../../utils/typography';
import { Label } from '../Navbar/Navbar.styles';

export const HeroWrapper = styled.header`
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 8.5rem;
`;

export const StyledSwiper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .mySwiper {
        width: 100%;
        height: 100%;
    }
`;

export const StyledSlide = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryBrown};
`;

export const SlideImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(55%);
`;

export const SlideContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10rem ${props => props.theme.padding.medium} 10rem ${props => props.theme.padding.medium};
`;

export const SlideContentInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${props => props.theme.padding.small};

    ${HeadingOne} {
        max-width: 40%;
        font-size: 5rem;
        text-transform: uppercase;
        line-height: 1.2;
    }

    ${Paragraph} {
        max-width: 50%;
        font-size: 2rem;
        line-height: 1.2;
        text-align: justify;
    }
`;


export const HeroContentOverlay = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    padding: 10rem ${props => props.theme.padding.medium} 1.5rem ${props => props.theme.padding.medium};
    // z-index: 100;
`;

export const HeroContentInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: flex-end;
    justify-content: flex-end;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
        z-index: 100;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
        z-index: 100;
    }
`;

export const SwiperNavigation = styled.div`
    position: relative;
    width: 7.5%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
    }
`;

export const SwiperNavigationButton = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryYellow};
    transition: all 0.35s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.white};
    }
`;

export const HeroContentNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-top: 0.1rem solid rgba(255,255,255,0.3);
    z-index: 100;
`;

export const StyledButtonWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 7.5%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 60%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        height: 60%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
    }
`;

export const StyledButton = styled.button`
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1rem;
        background-color: ${props => props.theme.colors.white};
        transform: scaleX(0);
        transition: all 0.35s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
    
    ${Label} {
        pointer-events: none;
        user-select: none;
    }
`;