import React from 'react';
import { HeadingTwo, Label } from '../../utils/typography';
import { StyledSectionWrapper, StyledSection, StyledSectionInner, ContactWrapper, ContactBlock, StyledLink } from './ContactSection.style';

function ContactSection() {
  return (
    <StyledSectionWrapper>
        <StyledSection>
            <StyledSectionInner>
                <HeadingTwo dark>Contact us for more information</HeadingTwo>
                <ContactWrapper>
                    <ContactBlock>
                        <Label color="black" weight="bold" size="large" uppercase>Phone number:</Label>
                        <StyledLink 
                            to='#'
                            onClick={(e) => {
                                window.location.href = "tel:0232.271.288";
                                e.preventDefault();
                            }}
                        >
                            <Label color="black" weight="bold" size="xLarge">0232.271.288</Label>
                        </StyledLink>
                    </ContactBlock>
                    <ContactBlock>
                        <Label color="black" weight="bold" size="large" uppercase>E-mail Adress:</Label>
                        <StyledLink 
                            to='#'
                            onClick={(e) => {
                                window.location.href = "mailto:dss@tuiasi.ro";
                                e.preventDefault();
                            }}
                        >
                            <Label color="black" weight="bold" size="xLarge">dss@tuiasi.ro</Label>
                        </StyledLink>
                    </ContactBlock>
                </ContactWrapper>
            </StyledSectionInner>
        </StyledSection>
    </StyledSectionWrapper>

  )
}

export default ContactSection;