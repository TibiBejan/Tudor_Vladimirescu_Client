import React from 'react';
import { Label, Paragraph } from '../../utils/typography';
import { StyledSection, SectionInner, ContentWrapper, BeforePseudo, AfterPseudo, GridWrapper, ContentBlock } from './StatsSection.styles';

function StatsSection() {
  return (
    <StyledSection>
        <SectionInner>
            <ContentWrapper>
                <BeforePseudo />
                <GridWrapper>
                    <ContentBlock>
                        <Label size="large" weight="bold" color="primaryYellow">21 Residence Halls</Label>
                        <Paragraph>The campus has an area of ​​137,148 square meters, approximately 14 ha. The first dormitories were built in 1969.</Paragraph>
                    </ContentBlock>
                    <ContentBlock>
                        <Label size="large" weight="bold" color="primaryYellow">8,000 accommodation places</Label>
                        <Paragraph>The campus is powered by state-of-the-art thermal equipment, and the dormitories are being rehabilitated.</Paragraph>
                    </ContentBlock>
                    <ContentBlock>
                        <Label size="large" weight="bold" color="primaryYellow">Good prices</Label>
                        <Paragraph>In "Tudor", you enjoy the lowest accommodation rates in the country.</Paragraph>
                    </ContentBlock>
                    <ContentBlock>
                        <Label size="large" weight="bold" color="primaryYellow">11 student organizations</Label>
                        <Paragraph>There are also two international organizations: BEST and AIESEC TUIAȘI.</Paragraph>
                    </ContentBlock>
                </GridWrapper>
                <AfterPseudo />
            </ContentWrapper>
        </SectionInner>
    </StyledSection>
  )
}

export default StatsSection;