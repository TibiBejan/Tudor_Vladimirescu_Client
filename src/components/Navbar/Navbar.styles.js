import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 8.5rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 ${props => props.theme.padding.medium};
    border-bottom: 0.1rem solid rgba(255,255,255,0.3);
    transition: all 0.35s ease-in-out;
    z-index: 500;

    ${props => props.sticky && css`
        background-color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.secondaryBrown};
    `}

    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        padding: 0 ${props => props.theme.padding.small};
    }
`;

export const NavbarWrapperInner = styled.nav`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(min-content, max-content) 1fr;
    align-items: center;
`;


export const NavbarLogo = styled.div`
    height: 100%;
    min-width: 27.5vw;
    padding: 1rem 0;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.invertcolor ? props.theme.colors.black : props.theme.colors.white};
`;

export const NavbarActions = styled.ul`
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: ${props => props.justify};
`;

export const ActionLink = styled(NavLink)`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-content: flex-end;
    justify-content: center;
    padding: 1.5rem;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: ${props => props.align ? props.align : 'start'};
    text-transform: uppercase;
    color: ${props => props.invertcolor ? props.theme.colors.black : props.theme.colors.white};
    transition: all 0.35s ease-in-out;

    & .selected {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: ${props => props.theme.colors.primaryYellow};
        opacity: 0;
        transition: all 0.35s ease-in-out;
    }

    &:hover {
        color: ${props => props.theme.colors.primaryYellow};

        &::after {
            opacity: 1;
        }
    }
`;

export const StyledAction = styled.button`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-content: flex-end;
    justify-content: center;
    padding: 1.5rem;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: ${props => props.align ? props.align : 'start'} !important;
    text-transform: uppercase;
    color: ${props => props.invertcolor ? props.theme.colors.black : props.theme.colors.white};
    transition: all 0.35s ease-in-out;

    & .selected {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: ${props => props.theme.colors.primaryYellow};
        opacity: 0;
        transition: all 0.35s ease-in-out;
    }

    &:hover {
        color: ${props => props.theme.colors.primaryYellow};

        &::after {
            opacity: 1;
        }
    } 
`;

export const NavbarAction = styled.li`
    position: relative;
    display: flex;
    flex: 1 1 25%;
    height: 100%;
    width: 100%;
`;

export const BeforePseudo = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 60%;
    width: 0.1rem;
    background-color: ${props => props.invertcolor ? props.theme.colors.secondaryBrown : 'rgba(255,255,255,0.3)'};
`;

export const AfterPseudo = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 60%;
    width: 0.1rem;
    background-color: ${props => props.invertcolor ? props.theme.colors.secondaryBrown : 'rgba(255,255,255,0.3)'};
`;

export const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.invertcolor ? props.theme.colors.black : props.theme.colors.white};
    pointer-events: none;
`;
