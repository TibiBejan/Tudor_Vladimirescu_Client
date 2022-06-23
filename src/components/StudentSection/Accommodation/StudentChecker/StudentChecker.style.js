import styled from "styled-components";
import { HeadingFour } from "../../../../utils/typography";

export const StyledChecker = styled.div`
    width: 100%;
    display: flex;
    padding: ${props => props.theme.padding.small} ${props => props.theme.padding.medium};
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledCheckerInner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
`;

export const StyledContentBlock = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

    ${HeadingFour} {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
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