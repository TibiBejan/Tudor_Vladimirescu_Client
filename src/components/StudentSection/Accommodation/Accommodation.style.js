import styled, { css } from "styled-components";
import Button from "../../../layout/button/Button";

export const StyledAccommodation = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr minmax(55vh, max-content);
    gap: 2.5rem;
`;

export const StyledAccommodationHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledAccommodationContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr) max-content;
    gap: 5rem;
`;

export const StyledButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-itmes: center;
    justify-content: center;

    ${Button} {
        max-width: 50%;
        margin: 0 auto;
    }
`;

export const StyledMessageWrapper = styled.div`
    width: 100%;
    padding: ${props => props.theme.padding.small};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    transition: 0.35s ease;
    ${props => props.background && css`
        background-color: ${props => props.theme.colors.primaryYellow};

        ${StyledMessage} {
            color: ${props => props.theme.colors.black};
        }
    `};
`;

export const StyledMessage = styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #a50000;
    transition: 0.35s ease;
`;