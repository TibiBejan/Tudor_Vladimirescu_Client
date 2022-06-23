import styled, { css } from 'styled-components';
import { HeadingFour, Label } from '../../../utils/typography';

export const StyledStudents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
`;

export const StyledStudentsHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
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

export const ActionsGroup = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem ${props => props.theme.padding.small};
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.35s ease;

    &:hover {
        opacity: 0.7;
    }
`;

export const StyledForm = styled.form`
    width: 100%;
    min-height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
`;

export const StyledFormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const SkeletonWrapper = styled.div`
    height: 100%;
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

export const StyledStudentsContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};

    ${SkeletonWrapper} {
        > span {
            width: 100%;
            height: 100%;
    
            & > span {
                height: 100%;
            }
        }
    }
`;