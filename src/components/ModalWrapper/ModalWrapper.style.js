import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
`;

export const StyledModalInner = styled.div`
    width: 100%;
    max-width: 75rem;
    height: 100%;
    max-height: 75rem;
    display: grid;
    grid-template-rows: max-content 1fr;
    background-color: ${props => props.theme.colors.lightBrown};
`;

export const ModalContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

export const ModalContentInner = styled.div`
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
    gap: 5rem;
`;

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${props => props.theme.padding.large};
    padding-top: ${props => props.theme.padding.large};
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem ${props => props.theme.padding.small};
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.35s ease;

    &:hover {
        opacity: 0.7;
    }
`;

