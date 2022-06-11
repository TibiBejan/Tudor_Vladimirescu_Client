import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { StyledSectionWrapper, StyledSection, StyledSectionInner } from './NewsSection.style';

function NewsSection({data}) {
  return (
      <StyledSectionWrapper>
        <StyledSection>
            <StyledSectionInner>
              {
                data.map((post) => (
                  <NewsCard key={post.id} data={post}/>
                ))
              }
            </StyledSectionInner>
        </StyledSection>
      </StyledSectionWrapper>
    
  )
}

export default NewsSection;