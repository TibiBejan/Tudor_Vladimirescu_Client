import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Label, Paragraph } from "../../../utils/typography";

export const StyledAllocation = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr minmax(55vh, max-content);
    gap: 2.5rem;
`;

export const StyledAllocationHeading = styled.div`
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

export const StyledAllocationContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.lightBrown};
    border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledAllocationInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

export const StyledAllocationScrollable = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
    gap: 2.5rem;

    & > a {
        width: 100%;

        &:hover {
            & > div > div > span {
                transform: scale(1.1);
            }
        }
    }
`;

export const SkeletonWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        width: 100%;
        height: 100%;

        & > span {
            height: 100%;
        }
    }
`;

export const  AllocationHallWrapper = styled.div`
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

export const AllocationDetails = styled.div`
    min-height: 20vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    text-align: start;
    gap: 2.5rem;

    ${Paragraph} {
        ${Label} {
            text-decoration: underline;
        }
    }
`;

export const AllocationDetailsList = styled.ol`
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
`;

export const AllocationColleagues = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
`;

export const StyledCaroussel = styled.div`
    min-height: 20vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
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

export const StyledColleagueWrapper = styled.div`
    height: 100%;
    min-height: 35vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: ${props => props.theme.colors.secondaryBrown};
`;

export const StyledNavbar = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    justify-content: space-between;
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
        background-color: ${props => props.theme.colors.secondaryBrown};
    }
`;

export const ColleagueImage = styled.div`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${props => props.theme.colors.brownShadeBlack};
`;

export const StyledLink = styled(Link)`
    position: relative;
    text-align: center;
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