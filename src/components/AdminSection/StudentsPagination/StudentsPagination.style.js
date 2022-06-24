import styled from 'styled-components';
import { Label } from '../../../utils/typography';

export const PaginationWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    gap: 2.5rem;
`;

export const StyledUser = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem ${props => props.theme.padding.small};

    &:nth-child(even) {
        background-color: ${props => props.theme.colors.white};
    }

    &:nth-child(odd) {
        background-color: ${props => props.theme.colors.secondaryBrown};
    }
`;

export const StyledUserData = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5rem;

    ${Label} {
        text-decoration: underline;
    }
`;

export const StyledPreviewImage = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryYellow};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ActionsGroup = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem ${props => props.theme.padding.small};
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.35s ease;

    &:hover {
        opacity: 0.7;
    }
`;