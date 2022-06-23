import styled, { css } from "styled-components";
import { Label } from "../../../utils/typography";

export const StyledMenu = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledMenuActions = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

export const StyledMenuAction = styled.li`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.small} 1.5rem;
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    transition: 0.35s ease;
    cursor: pointer;
    ${props => props.active && css`
        background-color: ${props.theme.colors.secondaryBrown};
    `}

    &:hover {
        background-color: ${props => props.theme.colors.secondaryBrown};

        ${Label} {
            user-select: none;
            pointer-events: none;
        }
    }
`;

export const StyledMenuLogo = styled.div`
    width: 100%;
    min-height: 15rem;
    padding: ${props => props.theme.padding.small};
    display: flex;
    align-items: center;
    justify-content:center
`;  

export const StyledLogoInner = styled.div`
    max-width: 15rem;
    height: 15rem;
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};

    & > div > span > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;