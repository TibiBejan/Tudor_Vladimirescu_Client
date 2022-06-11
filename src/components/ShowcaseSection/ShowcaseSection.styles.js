import styled from 'styled-components';
import { HeadingTwo, Paragraph } from '../../utils/typography';

export const StyledSection = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-flow: row;
`;

export const StyledContent = styled.div`
    display: flex;
    flex: 1 1 50%;
    order: ${props => props.justifyContent === 'start' ? 1 : 2};
    padding: ${props => props.theme.padding.xlarge} ${props => props.theme.padding.medium};
`;

export const StyledContentInner = styled.div`
    max-width: 70%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    & > * {
        text-align: center;
    }

    ${Paragraph} {
        margin-bottom: ${props => props.theme.margin.medium};
    }

    ${HeadingTwo} {
        margin: ${props => props.theme.margin.small} 0;
    }
`;

export const StyledImage = styled.div`
    display: flex;
    flex: 1 1 50%;
    order: ${props => props.justifyContent === 'start' ? 2 : 1};
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;