import styled from 'styled-components';

export const StyledYoutubeWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & iframe {
        width: 100%;
        height: 100%;
    }
`;