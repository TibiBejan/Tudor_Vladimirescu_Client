import React from 'react';
import Image from '../Image/Image';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';
import { HeadingThree, Label, Paragraph } from '../../utils/typography';
import { StyledLink, StyledCard, CardImage, CardContent, CardConenteDescription, StyledButton } from './NewsCard.style';

function NewsCard({data}) {
  return (
    <StyledLink to={`/news/${data.cardPreview.pathParam}`}>
        <StyledCard>
            <CardImage>
                <Image fileName={data.cardPreview.image} imageAlt={data.cardPreview.imageAlt}/>
            </CardImage>
            <CardContent>
                <CardConenteDescription>
                    <Label size="small" color="primaryYellow">{data.cardPreview.timestamp}</Label>
                    <HeadingThree>{data.cardPreview.title}</HeadingThree>
                    <Paragraph color="white">{data.cardPreview.descriptionPreview}</Paragraph>
                </CardConenteDescription>
                <StyledButton>
                    <Label color="white">Read more</Label>
                    <IconContext.Provider value={{color: '#fff', size: '2rem'}}>
                        <BsArrowRight className="footer-link-icon"/>
                    </IconContext.Provider>
                </StyledButton>
            </CardContent>
        </StyledCard>
    </StyledLink>
  )
}

export default NewsCard;