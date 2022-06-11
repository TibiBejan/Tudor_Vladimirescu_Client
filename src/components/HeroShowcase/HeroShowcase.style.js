import styled from 'styled-components';
import { HeadingOne, Label } from '../../utils/typography';
import Button from '../../layout/button/Button';

export const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

export const HeroImage = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.lightBrown};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2), rgba(0,0,0,0.2));
        z-index: 99;
    }
`;

export const HeroContentOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10rem ${props => props.theme.padding.medium} ${props => props.theme.padding.medium} ${props => props.theme.padding.medium};
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${HeadingOne} {
        max-width: 40%;
        font-size: 5rem;
        text-transform: uppercase;
        line-height: 1.2;
        z-index: 100;
    }
`;

export const HeroContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: minmax(min-content, max-content) 1fr;
    background-color: ${props => props.theme.colors.lightBrown};
`;

export const HeroContentNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const HeroContentNavbarInner = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 1.5rem;

    ${Button} {
        max-width: min-content;
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0.1rem;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 0.1rem;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }
`;

export const  StyledIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryYellow};
    transition: all 0.35s ease-in-out;
`;

export const  StyledButton = styled.button`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;

    ${Label} {
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        ${StyledIcon} {
            background-color: ${props => props.theme.colors.black};

            & .discover-button-icon {
                stroke: ${props => props.theme.colors.white};
            }
        }
    }
`;

export const ButtonWrapper = styled.div`
    max-width: max-content;
`;
