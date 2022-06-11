import styled from 'styled-components';

export const StyledSectionWrapper = styled.div`
    width: 100%;
    padding-bottom: ${props => props.theme.padding.medium};
    background-color: ${props => props.theme.colors.lightBrown};
`;

export const StyledSection = styled.div`
    width: 100%;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledSectionInner = styled.div`
    min-height: 35vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 0 1.5rem;
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;