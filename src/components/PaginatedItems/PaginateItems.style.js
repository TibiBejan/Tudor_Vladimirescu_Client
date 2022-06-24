import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr max-content;
    padding: ${props => props.theme.padding.small};
    gap: 2.5rem;
`;

export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    & .previous, 
    & .next {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${props => props.theme.margin.small};
        background-color: ${props => props.theme.colors.secondaryBrown};
        border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        transition: 0.35s ease;

        & a {
            width: 100%;
            height: 100%;
            padding: 1rem ${props => props.theme.padding.small};
        }

        &:hover {
            background-color: ${props => props.theme.colors.primaryYellow};
        }
    }

    & li {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.colors.secondaryBrown};
        border: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        transition: 0.35s ease;

        & a {
            width: 100%;
            height: 100%;
            padding: 1rem;
        }

        &:hover {
            background-color: ${props => props.theme.colors.primaryBrown};
        }
    }

    & .selected {
        background-color: ${props => props.theme.colors.primaryYellow};
    }
`;