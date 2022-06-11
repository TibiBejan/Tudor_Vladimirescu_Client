import { Link } from "react-router-dom";
import styled, {css} from "styled-components";
import { Label } from "../../utils/typography";

export const SectionWrapper = styled.div`
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
    padding: ${props => props.theme.padding.small} 0;

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

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 45%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
`;

export const HeadingForm = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
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
    padding: ${props => props.theme.padding.small}; 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    transition: 0.35s ease;
    ${props => props.background && css`
        background-color: ${props => props.theme.colors.lightBrown};

        ${StyledMessage} {
            color: ${props => props.theme.colors.black};
        }
    `};
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
`;

export const StyledLinks = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`;

export const StyledLink = styled(Link)`
    position: relative;
    text-align: center;
    padding-bottom: 0.5rem;

    ${Label} {
        user-select: none;
        pointer-events: none;
    }

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