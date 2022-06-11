import styled from 'styled-components';

export const StyledSection = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
`;

export const SectionHeader = styled.div`
    width: 100%;
    border-top: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const SectionHeaderInner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    // border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const HeaderBlock = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    jusitfy-content: center;
`;


export const AfterPseudo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 0.1rem;
    background-color: ${props => props.theme.colors.secondaryBrown};
`;

export const SectionContent = styled.div`
    width: 100%;
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const SectionContentInner = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    // border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const ContentBlock = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.padding.xlarge} 1.5rem 0 1.5rem;
    gap: 7.5rem;
`;

export const ContentBlockDescription = styled.div`
    min-height: 35vh;
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    & > * {
        text-align: center;
    }
`;

export const ContentBlockImage = styled.div`
    width: 100%;
    height: 60vh;
`;