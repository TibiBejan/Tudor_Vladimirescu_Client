import styled, { css } from 'styled-components';
import { HeadingFour, Paragraph } from '../../utils/typography';

export const StyledSectionWrapper = styled.div`
    width: 100%;
    padding-bottom: ${props => props.theme.padding.medium};
    background-color: ${props => props.background ? props.background : props.theme.colors.lightBrown};

    ${props => props.noMargin && css`
        padding-bottom: 0;
    `}
`;

export const StyledSection = styled.div`
    width: 100%;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-top: 0.1rem solid ${props => props.accent === 'light' ? "rgba(255,255,255,0.3)" : props.theme.colors.secondaryBrown};
    border-bottom: 0.1rem solid ${props => props.accent === 'light' ? "rgba(255,255,255,0.3)" : props.theme.colors.secondaryBrown};
`;

export const DescriptiveWrapper = styled.div`
    grid-column: 2 / -1;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.5rem;
`;

export const StyledSectionInner = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    justify-content: start;
    padding: 1.5rem;
    gap: 3.5rem;
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};

    ${props => props.accent === 'light' && css`
        ${HeadingFour} {
            color: ${props.theme.colors.white};
        }

        ${DescriptiveWrapper} {
            ${Paragraph} {
                color: ${props.theme.colors.white};        
            }
        }
    `};
`;
