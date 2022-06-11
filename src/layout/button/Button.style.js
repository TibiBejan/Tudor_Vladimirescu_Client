import styled, { css } from "styled-components";
import { Label } from "../../utils/typography";
import { Link } from "react-router-dom";

export const LinkLabel = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    ${Label} {
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0, 1),transform 0.6s cubic-bezier(0.4, 0, 0, 1);
        user-select: none;
        pointer-events: none;

        &:first-child {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            
        }

        &:last-child {
            position: absolute;
            top: 0;
            bottom: 0;
            transform: translate3d(0, 100%, 0);
            opacity: 0;
        }
    }
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem ${props => props.theme.padding.small};
    background-color: ${props => props.background ? props.background : props.theme.colors.primaryYellow};
    border-radius: 2.5rem;
    transition: 0.3s cubic-bezier(0.4, 0, 0, 1);

    ${props => props.size === 'small' && css`
        padding: 1rem ${props => props.theme.padding.small};

        ${Label} {
            font-size: 1.4rem
        }
    `}

    &:hover {
        background-color: ${props => props.theme.colors.brownShadeBlack};
        color: ${props => props.theme.colors.white};

        ${Label} {
            &:first-child {
                transform: translate3d(0, -100%, 0);
                opacity: 0;
            }
    
            &:last-child {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }
    }
`;

export const ActionLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem ${props => props.theme.padding.small};
    background-color: ${props => props.background ? props.background : props.theme.colors.primaryYellow};
    border-radius: 2.5rem;
    transition: 0.3s cubic-bezier(0.4, 0, 0, 1);

    ${props => props.size === 'small' && css`
        padding: 1rem ${props => props.theme.padding.small};

        ${Label} {
            font-size: 1.4rem
        }
    `}

    &:hover {
        background-color: ${props => props.theme.colors.brownShadeBlack};
        color: ${props => props.theme.colors.white};

        ${Label} {
            &:first-child {
                transform: translate3d(0, -100%, 0);
                opacity: 0;
            }

            &:last-child {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }
    }
`;
