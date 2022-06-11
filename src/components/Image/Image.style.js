import styled from 'styled-components';

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.lightBrown};
    transition: 0.75s cubic-bezier(0.4, 0, 0, 1);

    & > span {
        transition: 0.75s cubic-bezier(0.4, 0, 0, 1);
    }
`;

export const StyledError = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;