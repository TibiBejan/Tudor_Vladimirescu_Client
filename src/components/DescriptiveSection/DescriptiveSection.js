import React from 'react';
import { HeadingFour, Paragraph } from '../../utils/typography';
import { StyledSectionWrapper, StyledSection, StyledSectionInner, DescriptiveWrapper } from './DescriptiveSection.style';

function DescriptiveSection({data, background, accent, noMargin}) {
  return (
    <StyledSectionWrapper background={background} noMargin>
      <StyledSection accent={accent}>
        <StyledSectionInner accent={accent}>
            <HeadingFour>{data.title}</HeadingFour>
            <DescriptiveWrapper>
                {
                  data.description.map((paragraph, index) => (
                    <Paragraph key={index}>{paragraph}</Paragraph>
                  ))
                }
            </DescriptiveWrapper>
        </StyledSectionInner>
      </StyledSection>
    </StyledSectionWrapper>
    
  )
}

export default DescriptiveSection;