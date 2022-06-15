import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/user/userSlice';
import { IconContext } from 'react-icons';
import { BsArrowRight, BsArrowUp } from 'react-icons/bs';
import { HeadingThree, Label, Paragraph } from '../../utils/typography';
import { StyledFooter, StyledFooterContent, FooterContentInner, FooterContactBlock, FooterActionsBlock, StyledList, StyledListItem, StyledLink, StyledContactList, StyledContactListItem, ContactLink, StyledButton, StyledFooterInfo, StyledContactForm, StyledForm, StyledFormGroup, StyledInput, StyledSubmitButton, StyledFooterInfoInner } from './Footer.styles';

function Footer() {
  // Redux
  const {user: userSession} = useSelector(userSelector);
  const scrollToTop = () => {
    window.scrollTo(0,0);
  }

  return (
    <StyledFooter>
      <StyledFooterContent>
        <FooterContentInner>
          <FooterContactBlock>
            <HeadingThree dark>What's new at Tudor Vladimirescu Campus</HeadingThree>
            <Paragraph>Get the latest news about our Campus and Gheorghe Asachi University.</Paragraph>

            <StyledContactForm>
              <StyledForm method="POST">
                <StyledFormGroup>
                  <StyledInput type="email" name="email" id="email" required autoComplete="off" placeholder='Type your E-mail adress'/>
                </StyledFormGroup>
                <StyledSubmitButton>
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                      <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  </StyledSubmitButton>
              </StyledForm>
            </StyledContactForm>

          </FooterContactBlock>
          <FooterActionsBlock>
            <StyledList>
              <StyledListItem>
                <StyledLink to="/about-us">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">About Us</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink to="/canteen">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Canteen</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink to="/sportbase">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Sportbase</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink to="/news">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">News</Label>
                </StyledLink>
              </StyledListItem>
            </StyledList>

            <StyledList>
              <StyledListItem>
                <StyledLink to="/halls">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Halls</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink to="/accommodation">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Accommodation</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink 
                  to={
                    userSession?.token 
                        ? userSession?.user?.role === 'admin' 
                            ? "/admin"
                            : "/student"
                        : "/login"
                  } 
                >
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Account</Label>
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink to="/contact-us">
                  <IconContext.Provider value={{color: '#161615', size: '2rem'}}>
                    <BsArrowRight className="footer-link-icon"/>
                  </IconContext.Provider>
                  <Label size="large" color="black">Contact</Label>
                </StyledLink>
              </StyledListItem>
            </StyledList>

            <StyledContactList>
              <StyledContactListItem>
                <ContactLink href="https://www.instagram.com/campustudorvladimirescu/" target="_blank" >
                  <Label color="black">Instagram</Label>
                </ContactLink>
              </StyledContactListItem>
              <StyledContactListItem>
                <ContactLink href="https://www.linkedin.com/school/universitatea-tehnic%C4%83-%E2%80%9Egh.-asachi%E2%80%9D-din-ia%C8%99i/" target="_blank" >
                  <Label color="black">Linkedin</Label>
                </ContactLink>
              </StyledContactListItem>
              <StyledContactListItem>
                <ContactLink href="https://www.facebook.com/TUIasiRO"  target="_blank" >
                  <Label color="black">Facebook</Label>
                </ContactLink>
              </StyledContactListItem>
              <StyledContactListItem>
                <ContactLink href="https://www.tuiasi.ro/" target="_blank">
                  <Label color="black">Tuiasi</Label>
                </ContactLink>
              </StyledContactListItem>
              <StyledContactListItem>
                <StyledButton onClick={scrollToTop}>
                  <IconContext.Provider value={{color: '#161615', size: '34px'}}>
                      <BsArrowUp />
                  </IconContext.Provider>
                </StyledButton>
              </StyledContactListItem>
            </StyledContactList>

          </FooterActionsBlock>
        </FooterContentInner>
      </StyledFooterContent>
      <StyledFooterInfo>
        <StyledFooterInfoInner>
          <Label size="medium" color="black">Bachelor Paper &copy;2022</Label>
          <Label size="medium" color="black">Florentina Punguta</Label>
        </StyledFooterInfoInner>
      </StyledFooterInfo>
    </StyledFooter>
  )
}

export default Footer