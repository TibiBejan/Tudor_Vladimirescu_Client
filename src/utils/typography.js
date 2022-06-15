import styled, { css } from 'styled-components';

export const Label = styled.label`
    font-size: ${props => {
        switch(props.size) {
            case 'xLarge':
                return '3rem'
            case 'large':
                return '2rem';
            case 'medium':
                return '1.6rem';
            case 'small':
                return '1.4rem';
            default:
                return '1.6rem'
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'light':
                return 300;
            case 'normal':
                return 400;
            case 'bold':
                return 500;
            case 'black': 
                return 800;
            default: 
                return 400;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'white':
                return props.theme.colors.white;
            case 'lightGray': 
                return props.theme.colors.lightGray;
            case 'primrayGray':
                return props.theme.colors.primrayGray;
            case 'black':
                return props.theme.colors.black;
            case 'darkGray':
                return props.theme.colors.darkGray;
            case 'greenShadeBlack':
                return props.theme.colors.greenShadeBlack;
            case 'brownShadeBlack':
                return props.theme.colors.brownShadeBlack;
            case 'primaryBrown':
                return props.theme.colors.primaryBrown;
            case 'primaryYellow':
                return props.theme.colors.primaryYellow;
            default: 
                return props.theme.colors.white;
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'capitalize'};
    ${props => props.verticalMode && css`
        line-height: 150%;
        writing-mode: sideways-rl;
        text-orientation: mixed;
    `}
    ${props => props.shadow && css`
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.6);
    `}

    ${props => props.theme.breakpoints.medium} {
        font-size: ${props => {
            switch(props.size) {
                case 'xLarge':
                    return '2.5rem'
                case 'large':
                    return '1.6rem';
                case 'medium':
                    return '1.2rem';
                case 'small':
                    return '1rem';
                default:
                    return '1.2rem'
            }
        }};
    }
`;

export const Paragraph = styled.p`
    font-size: ${props => {
        switch(props.size) {
            case 'large':
                return '1.8rem';
            case 'medium':
                return '1.6rem';
            case 'small':
                return '1.4rem';
            default:
                return '1.6rem'
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'light':
                return 300;
            case 'normal':
                return 400;
            case 'bold':
                return 600;
            default: 
                return 400;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case 'white':
                return props.theme.colors.white;
            case 'lightGray': 
                return props.theme.colors.lightGray;
            case 'primrayGray':
                return props.theme.colors.primrayGray;
            case 'black':
                return props.theme.colors.black;
            case 'darkGray':
                return props.theme.colors.darkGray;
            case 'greenShadeBlack':
                return props.theme.colors.greenShadeBlack;
            case 'brownShadeBlack':
                return props.theme.colors.brownShadeBlack;
            case 'primaryRed':
                return props.theme.colors.primaryRed;
            case 'darkRed':
                return props.theme.colors.darkRed;
            default: 
                return props.theme.colors.black; 
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    text-transform: ${props => props.uppercase ? props.uppercase : 'normal'};
    line-height: 135%;

    ${props => props.theme.breakpoints.medium} {
        font-size: ${props => {
        switch(props.size) {
            case 'large':
                return '1.6rem';
            case 'medium':
                return '1.2rem';
            case 'small':
                return '1rem';
            default:
                return '1.2rem'
        }
        }};
    }
`;

export const HeadingOne = styled.h1`
    font-size: ${props => {
        switch(props.size) {
            case 'normal':
                return '4rem';
            case 'showcase':
                return '6.5rem';
            default:
                return '4rem';
        }
    }};
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    line-height: ${props => {
        switch(props.height) {
            case 'normal':
                return '150%';
            case 'showcase':
                return '125%';
            default:
                return '150%';
        }
    }};

    ${props => props.theme.breakpoints.medium} {
        font-size: ${props => {
            switch(props.size) {
                case 'normal':
                    return '3rem';
                case 'showcase':
                    return '4.5rem';
                default:
                    return '3rem';
            }
        }};
    }
`;

export const HeadingTwo = styled.h2`
    font-size: 3.5rem;
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 500;
            case 'bold':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 500;
        }
    }};
    color: ${props => props.dark ? props.theme.colors.primaryBrown : props.theme.colors.white};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    line-height: 125%;

    ${props => props.theme.breakpoints.medium} {
        font-size: 3rem;
    }

    ${props => props.theme.breakpoints.small} {
        font-size: 2.5rem;
    }
`;

export const HeadingThree = styled.h3`
    font-size: 2.5rem;
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => props.dark ? props.theme.colors.black : props.theme.colors.white};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    line-height: 150%;

    ${props => props.theme.breakpoints.medium} {
        font-size: 2rem;
    }
`;

export const HeadingFour = styled.h4`
    font-size: 2rem;
    font-weight: ${props => {
        switch(props.weight) {
            case 'normal':
                return 600;
            case 'showcase':
                return 800;
            default:
                return 600;
        }
    }};
    color: ${props => props.dark ? props.theme.colors.black : props.theme.colors.white};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'normal'};
    line-height: 150%;

    ${props => props.theme.breakpoints.medium} {
        font-size: 1.8rem;
    }
`;