import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Label } from '../Navbar/Navbar.styles';

export const StyledCard = styled.div`
    width: 75vw;
    min-height: 40vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${props => props.theme.colors.primaryBrown};
`;

export const CardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryBrown};
    overflow: hidden;
`;

export const CardContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${props => props.theme.padding.medium};
`;

export const CardConenteDescription = styled.div`
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
`;

export const StyledButton = styled.button`
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem;
    padding-bottom: 0.5rem;

    ${Label} {
        transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
        user-select: none;
        pointer-events: none;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.1rem;
        background-color: ${props => props.theme.colors.lightGray};
    }

    &::after {
        height: 0.2rem;
        background-color: ${props => props.theme.colors.white};
        transform: scaleX(0);
        transform-origin: center;
        transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        ${StyledCard} {
            ${CardImage} {
                & > div > span {
                    transform: scale(1.1);
                }
            }
        }

        ${StyledButton} {
            &::after {
                transform: scaleX(1);
            }
        }
    }
`;