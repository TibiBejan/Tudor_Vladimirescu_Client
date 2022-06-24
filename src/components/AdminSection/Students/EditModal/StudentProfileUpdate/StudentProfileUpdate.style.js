import styled, { css } from "styled-components";
import { HeadingFour } from "../../../../../utils/typography";

export const StyledAccountUpdate = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr minmax(50vh, max-content);
    gap: 5rem;
`;

export const StyledAccountUpdateHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`;

export const StyledAccountUpdateForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const StyledFormWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

export const StyledForm = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
`;

export const StyledMessage = styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #a50000;
    transition: 0.35s ease;
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

export const StyledButtonGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`;

export const FormHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${HeadingFour} {
        text-decoration: underline;
    }
`;


export const StyledFormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const SkeletonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        width: 100%;
        height: 5rem;

        & > span {
            height: 100%;
        }
    }
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledSelect = styled.select`
    width: 100%;
    padding: 1.5rem;
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    transition: 0.35s ease;

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }

    &:hover,
    &:focus {
        border-color: ${props => props.theme.colors.primaryYellow};
    }
`;
