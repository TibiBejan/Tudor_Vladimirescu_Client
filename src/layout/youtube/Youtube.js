import React from 'react';
import { StyledYoutubeWrapper } from './Youtube.style';

function Youtube({ videoId }) {
  return (
    <StyledYoutubeWrapper>
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube video"
        />
    </StyledYoutubeWrapper>
  )
}

export default Youtube;