import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HeadingThree } from '../../utils/typography';

export const StyledSlide = styled.div`
    height: 55vh;
    width: 100%;
    background-color: ${props => props.theme.colors.brownShadeBlack};
    padding: ${props => props.theme.padding.medium};
`;

export const StyledSlideInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;

    ${HeadingThree} {
        text-align: center;
    }
`;

export const StyledContactImage = styled.div`
    width: 17.5rem;
    height: 17.5rem;
    border-radius: 50%;
    overflow: hidden;
`;

export const StyledLink = styled(Link)`
    position: relative;
    text-align: center;
    padding-bottom: 0.5rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.15rem;
        background-color: ${props => props.theme.colors.white};
        transform: scaleX(0);
        transition: 0.35s ease;
    }

    &:hover {
        &:after {
            transform: scaleX(1);
        }
    }
`;