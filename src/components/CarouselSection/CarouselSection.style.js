import styled from 'styled-components';

export const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-bottom: ${props => props.theme.padding.medium};
    background-color: ${props => props.theme.colors.black};
`;

export const SkeletonWrapper = styled.div`
    width: 100%;
    padding: ${props => props.theme.padding.small};
`;

export const SkeletonWrapperInner = styled.div`
    position: relative;
    height: 30vh;
    display: flex;

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

export const StyledCarouselInner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.large} ${props => props.theme.padding.medium} ${props => props.theme.padding.medium} ${props => props.theme.padding.medium};
`;

export const StyledTitle = styled.div`
    max-width: 30%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    
    & > * {
        text-align: center;
    }
`;

export const StyledSwiper = styled.div`
    min-height: 35vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .mySwiper {
        width: 100%;
        height: 100%;
    }
`;

export const StyledNavbar = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, max-content);
    align-items: center;
    justify-content: space-between;
    border-top: 0.1rem solid rgba(255,255,255,0.3);
    border-bottom: 0.1rem solid rgba(255,255,255,0.3); 
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const StyledButtonWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 0 1.5rem;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 80%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        height: 80%;
        width: 0.1rem;
        background-color: rgba(255,255,255,0.3);
    }
`;

export const SwiperNavigationButton = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryYellow};
    transition: all 0.35s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.white};
    }
`;