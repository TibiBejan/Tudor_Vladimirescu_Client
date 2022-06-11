import styled from "styled-components";

export const StyledFormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${props => props.theme.padding.small};
    background-color: transparent;
`;

export const StyledMessageWrapper = styled.div`
    width: 100%;
    padding: ${props => props.theme.padding.small}; 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    transition: 0.35s ease;
`;

export const StyledMessage = styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #a50000;
    transition: 0.35s ease;
`;