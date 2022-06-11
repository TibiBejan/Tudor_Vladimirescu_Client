import styled from 'styled-components';

export const StyledSection = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    padding: ${props => props.theme.padding.small} 0;
    background-color: ${props => props.theme.colors.lightBrown};
`;

export const SectionInner = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-top: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const SectionWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: column;
    gap: 3.5rem;
    padding: 1.5rem;
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const SectionContent = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 3.5rem;
    padding: 0 ${props => props.theme.padding.medium};

    & > span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & > span {
            width: 100%;
            height: 100%;
        }
    }
`;

export const SectionContentDescription = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: column;  
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
`;

export const DescriptionListItem = styled.li`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    gap: 3.5rem;
`;

export const SectionImage = styled.div`
    position: relative;
    width: 100%;
    min-height: 65vh;

    & > span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & > span {
            width: 100%;
            height: 100%;
        }
    }
`;
