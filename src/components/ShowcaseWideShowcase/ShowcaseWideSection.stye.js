import styled from 'styled-components';
import { HeadingTwo, Label, Paragraph } from '../../utils/typography';

export const ShowcaseWide = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    background-color: ${props => props.theme.colors.lightBrown};
`;

export const SectionHeader = styled.div`
    width: 100%;
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
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    padding: 0 1.5rem;
`;

export const  StyledIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryYellow};
    transition: all 0.35s ease-in-out;
`;

export const StyledButton = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    cursor: pointer;

    ${Label} {
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        ${StyledIcon} {
            background-color: ${props => props.theme.colors.black};

            & .discover-button-icon {
                stroke: ${props => props.theme.colors.white};
            }
        }
    }
`;

export const SectionContent = styled.div`
    width: 100%;
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    padding: 1.5rem ${props => props.theme.padding.medium};
`;

export const SectionContentInner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    padding: 0 1.5rem;

    ${HeadingTwo} {
        max-width: 50%;
        margin-top: ${props => props.theme.margin.small};
    }

    ${Paragraph} {
        max-width: 60%;
        margin-bottom: ${props => props.theme.margin.small};
        text-align: center;
    }
`;

export const SectionShowcase = styled.div`
    position: relative;
    width: 100%;
    min-height: 60vh;
    border-bottom: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const SectionShowcaseInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;