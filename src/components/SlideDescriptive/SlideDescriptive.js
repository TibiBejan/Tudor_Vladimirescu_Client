import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { FiArrowRight } from "react-icons/fi";
import Image from '../Image/Image';
import { HeadingThree, Label } from '../../utils/typography';
import { StyledSlide, SlideImage, SlideContent, StyledButton, LinkLabel } from './SlideDescriptive.style';
 
function SlideDescriptive({data}) {
  return (
    <Link to={data.linkPath}>
        <StyledSlide>
            <SlideImage>
                <Image fileName={data.image} alt={data.imageAlt} />
            </SlideImage>
            <SlideContent>
                <Label size="small" color="primaryYellow" weight="bold">{data.subtitle}</Label>
                <HeadingThree dark>{data.title}</HeadingThree>
                <StyledButton>
                    <LinkLabel>
                        <Label color="black" uppercase>{data.buttonLabel}</Label>
                        <Label color="black" uppercase>{data.buttonLabel}</Label>
                    </LinkLabel>
                    <IconContext.Provider value={{size: "1.6rem", color: "#161615"}}>
                        <FiArrowRight />
                    </IconContext.Provider>
                </StyledButton>
            </SlideContent>
        </StyledSlide>
    </Link>
  )
}

export default SlideDescriptive;