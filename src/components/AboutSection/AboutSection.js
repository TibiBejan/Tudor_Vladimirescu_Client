import React from 'react';
import { HeadingTwo, Label, Paragraph } from '../../utils/typography';
import Image from '../Image/Image';
import Button from '../../layout/button/Button';
import { StyledSection, SectionHeader, SectionHeaderInner, HeaderBlock, AfterPseudo, SectionContent, SectionContentInner, ContentBlock, ContentBlockDescription, ContentBlockImage } from './AboutSection.style';

function AboutSection({data, type}) {
    return (
      <StyledSection> 
        {
          type === "showcase" && (
            <SectionHeader>
              <SectionHeaderInner>
                {
                  data.map(sectionEntry => (
                    <HeaderBlock key={sectionEntry.id}>
                      <Label color="black">{sectionEntry.subtitleLabel}</Label>
                      <Label color="primaryYellow" uppercase>{sectionEntry.subtitle}</Label>
                      <AfterPseudo />
                    </HeaderBlock>
                  ))
                }
              </SectionHeaderInner>
            </SectionHeader>
          )
        }
        <SectionContent>
          <SectionContentInner>
            {
              data.map(sectionEntry => (
                <ContentBlock key={sectionEntry.id}>
                  <ContentBlockDescription>
                    {
                      type === "showcase" && (
                        <>
                          <HeadingTwo dark>{sectionEntry.title}</HeadingTwo>
                          <Paragraph>{sectionEntry.paragraph}</Paragraph>
                          <Button linkPath={sectionEntry.linkPath} textLabel={sectionEntry.linkLabel} color="white" />
                        </>
                      )
                    }
                    {
                      type === "descriptive" && (
                        <>
                          <HeadingTwo dark>{sectionEntry.title}</HeadingTwo>
                          {
                            sectionEntry.paragraph.map((paragraphEntry, index) => (
                              <Paragraph key={index}>{paragraphEntry}</Paragraph>
                            ))
                          }
                        </>
                      )
                    }
                  </ContentBlockDescription>
                  <ContentBlockImage>
                    <Image fileName={sectionEntry.image} alt={sectionEntry.imageAlt}/>
                  </ContentBlockImage>
                  <AfterPseudo />
                </ContentBlock>
              ))
            }
          </SectionContentInner>
        </SectionContent>
      </StyledSection>
    )
}

export default AboutSection;