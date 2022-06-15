import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-top: ${props => props.theme.margin.small};
`;

export const StyledSectionInner = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: minmax(max-content, 25rem) 1fr;
    gap: 7.5rem;
    padding: 0 ${props => props.theme.padding.medium};
`;