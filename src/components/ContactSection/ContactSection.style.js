import styled from 'styled-components';

export const StyledSectionWrapper = styled.div`
    padding: ${props => props.theme.padding.small} 0;
    background-color: ${props => props.theme.colors.white};
`;

export const StyledSection = styled.div`
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-top: 0.1rem solid ${props => props.accent === 'light' ? "rgba(255,255,255,0.3)" : props.theme.colors.secondaryBrown};
    border-bottom: 0.1rem solid ${props => props.accent === 'light' ? "rgba(255,255,255,0.3)" : props.theme.colors.secondaryBrown};
`;

export const StyledSectionInner = styled.div`
    position: relative;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 5rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0.1rem;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 0.1rem;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }
`;

export const ContactWrapper = styled.div`
    width: 100%;
    padding: 0 ${props => props.theme.padding.medium};
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContactBlock = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`;

export const StyledLink = styled.div`
    position: relative;
    padding-bottom: 0.5rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.15rem;
        background-color: ${props => props.theme.colors.black};
        transform: scaleX(0);
        transition: 0.35s ease;
    }

    &:hover {
        &:after {
            transform: scaleX(1);
        }
    }
`;