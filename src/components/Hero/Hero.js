import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IconContext } from 'react-icons/lib';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HeadingOne, Label, Paragraph } from '../../utils/typography';
import Image from '../Image/Image';
import { HeroWrapper, StyledSwiper, StyledSlide, SlideImageWrapper, SlideContentWrapper, SlideContentInner, HeroContentOverlay, HeroContentInner, SwiperNavigation, SwiperNavigationButton, HeroContentNavbar, StyledButtonWrapper, StyledButton } from './Hero.styles';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Hero({ data }) {
  // Ref
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const heroRef = useRef(null);
  // State
  const [ activeIndex, setActiveIndex ] = useState(null);
  // Functions
  const scrollToContent = () => {
    const heroHeight = heroRef.current.getBoundingClientRect().height - 85; // Height of hero block - navbar height (hardcoded)
    window.scrollTo(0, heroHeight);
  }

  return (
    <HeroWrapper ref={heroRef}>
      <StyledSwiper>
        <Swiper
          onInit={(Swiper) => {
            setActiveIndex((Swiper.activeIndex + 1).toString().padStart(2, 0));
          }}
          onSlideChange={(Swiper) => {
            setActiveIndex((Swiper.activeIndex + 1).toString().padStart(2, 0));
          }}
          navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
          }}
          modules={[Navigation]}
          grabCursor={true}
          resistance="100%"
          resistanceRatio={0}
          className="mySwiper"
        >
          {
            data.slides.map(slide => (
              <SwiperSlide key={slide.id}>
                <StyledSlide>
                  <SlideImageWrapper>
                    <Image fileName={slide.image} alt={slide.imageAlt} />
                  </SlideImageWrapper>
                  <SlideContentWrapper>
                    <SlideContentInner>
                      <HeadingOne>{slide.title}</HeadingOne>
                      <Paragraph color="white">{slide.description}</Paragraph>
                    </SlideContentInner>
                  </SlideContentWrapper>
                </StyledSlide>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </StyledSwiper>
      <HeroContentOverlay>
        <HeroContentInner>
          <SwiperNavigation>
            <SwiperNavigationButton ref={prevButtonRef}>
              <IconContext.Provider value={{size: "1.8rem", color: "#231f20"}}>
                <FiArrowLeft />
              </IconContext.Provider>
            </SwiperNavigationButton>
            <SwiperNavigationButton ref={nextButtonRef}>
              <IconContext.Provider value={{size: "1.8rem", color: "#231f20"}}>
                <FiArrowRight />
              </IconContext.Provider>
            </SwiperNavigationButton>
          </SwiperNavigation>
        </HeroContentInner>
      </HeroContentOverlay>
      <HeroContentNavbar>
        <StyledButtonWrapper>
          <StyledButton type="button" onClick={scrollToContent}>
            <Label size="small" weight="bold">Scroll down</Label>
          </StyledButton>
        </StyledButtonWrapper>
        <StyledButtonWrapper>
          <Label size="small" weight="bold">{activeIndex} / {data.slides.length.toString().padStart(2, 0)}</Label>
        </StyledButtonWrapper>
      </HeroContentNavbar>
    </HeroWrapper>
  )
}

Hero.propTypes = {
  data: PropTypes.object,
}

export default Hero;