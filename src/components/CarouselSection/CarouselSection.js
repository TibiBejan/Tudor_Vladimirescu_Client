import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IconContext } from 'react-icons/lib';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Skeleton from 'react-loading-skeleton';
import SlideDescriptive from '../SlideDescriptive/SlideDescriptive';
import SlideShowcase from '../SlideShowcase/SlideShowcase';
import SlideContact from '../SlideContact/SlideContact';
import Button from '../../layout/button/Button';
import { Label, HeadingOne } from '../../utils/typography';
import { StyledCarousel, SkeletonWrapper, SkeletonWrapperInner, StyledCarouselInner, StyledTitle, StyledSwiper, StyledNavbar, StyledButtonWrapper, SwiperNavigationButton } from './CarouselSection.style';
import 'react-loading-skeleton/dist/skeleton.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function CarouselSection({data, loaded, error, type}) {
    // Ref
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    // State
    const [ activeIndex, setActiveIndex ] = useState(null);

    return (
        <StyledCarousel>
                {
                    !loaded && (
                        <SkeletonWrapper>
                            <SkeletonWrapperInner>
                                <Skeleton baseColor="#F5F2ED" />
                            </SkeletonWrapperInner>
                        </SkeletonWrapper>
                    )
                }
                {
                    (loaded && error) && (
                        <p>{error.message}</p>
                    )
                }
                {
                    (loaded && data) && (
                        <>
                            <StyledCarouselInner>
                                {
                                    type === "descriptive" && (
                                        <StyledTitle>
                                            <Label color="white" size="small">{data.subtitleLabel}</Label>
                                            <Label color="primaryYellow" uppercase>{data.subtitle}</Label>
                                            <HeadingOne>{data.title}</HeadingOne>
                                        </StyledTitle>
                                    )
                                }
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
                                        slidesPerView={3.5}
                                        spaceBetween={50}
                                        resistance="100%"
                                        resistanceRatio={0}
                                        className="mySwiper"
                                    >
                                        {
                                            data.slides.map(entry => (
                                                <SwiperSlide key={entry.id || entry.createdAt}>
                                                    {
                                                        type === "descriptive" && (
                                                            <SlideDescriptive data={entry} />
                                                        )
                                                    }
                                                    {
                                                        type === "showcase" && (
                                                            <SlideShowcase data={entry} />
                                                        )
                                                    }
                                                    {
                                                        type === "contact" && (
                                                            <SlideContact data={entry} />
                                                        )
                                                    }
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </StyledSwiper>
                            </StyledCarouselInner>
                            <StyledNavbar>
                                <StyledButtonWrapper>
                                    <Label size="medium" weight="bold">{activeIndex} / {data.slides.length.toString().padStart(2, 0)}</Label>
                                </StyledButtonWrapper>
                                <Button linkPath={data.carouselButtonLink || "/dss"} textLabel={data.carouselButtonLabel || "Discover DSS"} color="white" hoverBacground="white"/>
                                <StyledButtonWrapper>
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
                                </StyledButtonWrapper>
                            </StyledNavbar>
                        </>       
                    )
                }
        </StyledCarousel>
    )
}

export default CarouselSection;