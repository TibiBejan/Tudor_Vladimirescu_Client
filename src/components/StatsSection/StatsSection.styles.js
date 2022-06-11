import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-contnet: center;
    margin: 1.5rem 0;
    border-top: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const SectionInner = styled.div`
    width: 100%;
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const BeforePseudo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0.1rem;
    background-color: ${props => props.theme.colors.secondaryBrown};
`;

export const AfterPseudo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 0.1rem;
    background-color: ${props => props.theme.colors.secondaryBrown};
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10rem;
    padding: ${props => props.theme.padding.medium} 0;
`;

export const ContentBlock = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;