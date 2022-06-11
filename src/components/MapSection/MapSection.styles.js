import styled from 'styled-components';

export const StyledMap = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & .leaflet-container {
        height: 100%;
        width: 100%;
    }
`;