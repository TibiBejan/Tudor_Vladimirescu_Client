import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 55vh;
    background-color: ${props => props.theme.colors.primaryBrown};
`;

export const StyledImageInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;