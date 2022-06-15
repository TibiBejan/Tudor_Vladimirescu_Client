import styled, { css } from 'styled-components';

export const StyledRelatives = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr minmax(40vh, max-content);
    gap: 2.5rem;
`;

export const StyledRelativesHeading = styled.div`
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

export const StyledRelativesList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledListWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

export const StyledList = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
    gap: 2.5rem;
`;

export const StyledRelativeItem = styled.div`
    width: 100%;
    padding: 1.5rem; ${props => props.theme.padding.large};
    background-color: red;
`;

export const StyledRelativesForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
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
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
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
