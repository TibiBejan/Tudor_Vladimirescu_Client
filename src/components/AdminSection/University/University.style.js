import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { Label } from '../../../utils/typography';

export const StyledUniversities = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr minmax(55vh, max-content);
    gap: 2.5rem;
`;

export const StyledUniversitiesHeading = styled.div`
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

export const StyledUniversitysContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledUniversitysInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

export const StyledUniversitysGrid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.medium};
    gap: 2.5rem;
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

export const StyledMessage = styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #a50000;
    transition: 0.35s ease;
`;

export const SkeletonWrapper = styled.div`
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

export const UniversityWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30vh;
    background-color: ${props => props.theme.colors.primaryBrown};
    overflow: hidden;

    & > div > span > img {
        filter: brightness(65%);
    }
`;

export const UniversityActionLink = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: ${props => props.theme.padding.small};
    display: flex;
    justify-content: center;

    ${Label} {
        user-select: none;
        pointer-events: none;
        text-align: center;
        text-shadow: 0.2rem 0.2rem ${props => props.theme.colors.black};
    }
`;

export const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
`;