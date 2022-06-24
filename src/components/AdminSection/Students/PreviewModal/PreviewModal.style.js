import styled from 'styled-components';
import { Label, Paragraph } from '../../../../utils/typography';

export const StyledHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
`;

export const StyledContent = styled.div`
    width: 100%;
    min-height: 30vh;
    display: flex;
`;

export const StyledInner = styled.div`
    position: relative;
    width: 100%;
    min-height: 30vh;
    display: flex;
    overflow: auto;
`;

export const StyledScrollable = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
`;

export const HallWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30vh;
    background-color: ${props => props.theme.colors.primaryBrown};
    overflow: hidden;
`;

export const HallActionLink = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: ${props => props.theme.padding.small};
    display: flex;
    justify-content: center;

    ${Label} {
        text-shadow: 0.2rem 0.2rem ${props => props.theme.colors.black};
    }
`;

export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    text-align: start;
    gap: 2.5rem;
`;

export const DetailsList = styled.ol`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    list-style-type: square;
`;

export const ListItem = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;

    ${Label} {
        color: ${props => props.theme.colors.black} !important;
    }
`;