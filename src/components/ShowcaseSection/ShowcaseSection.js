import React from 'react';
import Button from '../../layout/button/Button';
import { HeadingTwo, Label, Paragraph } from '../../utils/typography';
import Image from '../Image/Image';
import { StyledSection, StyledContent, StyledContentInner, StyledImage } from './ShowcaseSection.styles';

function ShowcaseSection({ justifyContent, data }) {
  return (
    <StyledSection>
        <StyledContent justifyContent={justifyContent}>
            <StyledContentInner>
                <Label color="black" size="small">{data.subtitleLabel}</Label>
                <Label color="primaryYellow" uppercase>{data.subtitle}</Label>
                <HeadingTwo dark>{data.title}</HeadingTwo>
                <Paragraph>{data.description}</Paragraph>
                <Button linkPath={data.linkPath} textLabel={data.linkLabel} color="white" />
            </StyledContentInner>
        </StyledContent>
        <StyledImage justifyContent={justifyContent}>
            <Image fileName={data.image} alt={data.imageAlt} />
        </StyledImage>
    </StyledSection>
  )
}

export default ShowcaseSection;