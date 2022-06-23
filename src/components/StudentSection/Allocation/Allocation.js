import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IconContext } from 'react-icons/lib';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from '../../Image/Image';
import CarouselSection from '../../CarouselSection/CarouselSection';
import { HeadingFour, HeadingThree, Label, Paragraph } from '../../../utils/typography';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { StyledAllocation, StyledAllocationHeading, StyledAllocationContent, StyledAllocationInner, StyledAllocationScrollable, SkeletonWrapper, AllocationHallWrapper, HallActionLink, StyledMessageWrapper, StyledMessage, AllocationDetails, AllocationColleagues, StyledCaroussel, StyledSwiper, StyledColleagueWrapper, StyledNavbar, StyledButtonWrapper, SwiperNavigationButton, AllocationDetailsList, ListItem, ColleagueImage, StyledLink } from './Allocation.style';

function Allocation() {
    // Ref
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    // State
    const [ allocationData, setAllocationData ] = useState({});
    const [ allocationDataError, setAllocationDataError ] = useState(null);
    const [ allocationDataLoading, setAllocationDataLoading ] = useState(true);
    const [ activeIndex, setActiveIndex ] = useState(null);
    // Effect
    useEffect(() => {
        (async () => {
            try {      
                setAllocationDataLoading(true);
                const response = await axios.request({
                    method: 'GET', 
                    url: `${process.env.REACT_APP_API_URL}/accommodation`,
                    withCredentials: true,
                });
                if(response.status === 200 || response.status === 201) {
                    setAllocationData(response.data.data);
                    setAllocationDataError(null);
                } 
            } catch (error) {
                setAllocationDataError(error.response.data.message);
            } finally {
                setAllocationDataLoading(false);
            }
        })();
    }, []);

    console.log(allocationData)

    return (
        <StyledAllocation>
            <StyledAllocationHeading>
                <HeadingThree dark>Student accommodation</HeadingThree>
                <Paragraph size="large" color="black">From this panel, you can see your accommodation status</Paragraph>
                {allocationDataError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{allocationDataError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
            </StyledAllocationHeading>
            <StyledAllocationContent>
                <StyledAllocationInner>
                    <StyledAllocationScrollable>
                        {
                            allocationDataLoading 
                                ? (
                                    <SkeletonWrapper>
                                        <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                    </SkeletonWrapper>
                                )
                                : (
                                    <>
                                        <Link to={`/halls/${allocationData.student.Hall.hall_name}`}>
                                            <AllocationHallWrapper>
                                                <Image fileName={`halls/residence-hall-t${allocationData?.student?.Hall?.hall_number}.jpg`} alt={`Residence Hall ${allocationData.student.Hall.hall_name}`}/>
                                                <HallActionLink>
                                                    <Label size="large" fontWeight="bold" uppercase>Residence Hall {allocationData.student.Hall.hall_name}</Label>
                                                </HallActionLink>
                                            </AllocationHallWrapper>
                                        </Link>
                                        <AllocationDetails>
                                            <Paragraph size="large" color="black">Congratulations, {allocationData?.student?.first_name}!. Based on your personal informations and signed papers, we managed to accommodate you in Tudor Vladimirescu campus, as student of the faculty: <Label size="large" color="black">{allocationData?.student?.Enrollment?.university}</Label>, as follows:</Paragraph>
                                            <AllocationDetailsList>
                                                <ListItem>
                                                    <Label size="large" color="black">Residence Hall: {allocationData.student.Hall.hall_name}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Required Grade: {allocationData.student.Hall.min_grade}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Total students: {allocationData.student.Hall.total_students}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Total rooms: {allocationData.student.Hall.total_rooms}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Students per Room: {allocationData.student.Hall.students_in_room}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Room floor: {allocationData.student.HallRoom.floor}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Room number: {allocationData.student.HallRoom.number}</Label>
                                                </ListItem>
                                                <ListItem>
                                                    <Label size="large" color="black">Room rent per month: {allocationData.student.HallRoom.rent_per_month} RON</Label>
                                                </ListItem>
                                            </AllocationDetailsList>
                                        </AllocationDetails>
                                        {
                                            allocationData?.neighbors.length !== 0 && (
                                                <AllocationColleagues>
                                                    <StyledCaroussel>
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
                                                                slidesPerView={2.5}
                                                                spaceBetween={50}
                                                                resistance="100%"
                                                                resistanceRatio={0}
                                                                className="mySwiper"
                                                            >
                                                                {
                                                                    allocationData.neighbors.length !== 0 && allocationData.neighbors.map((el) => (
                                                                        <SwiperSlide key={el.email}>
                                                                            <StyledColleagueWrapper>
                                                                                <ColleagueImage>
                                                                                    <Image fileName="staff/placeholder.svg" alt="Placeholder for user image"/>
                                                                                </ColleagueImage>
                                                                                <HeadingFour dark>{`${el.first_name} ${el.last_name}`}</HeadingFour>
                                                                                <StyledLink 
                                                                                    to='#'
                                                                                    onClick={(e) => {
                                                                                        window.location.href = `mailto:${el.email}`;
                                                                                        e.preventDefault();
                                                                                    }}
                                                                                >
                                                                                    <Label color="black" weight="bold">{el.email}</Label>
                                                                                </StyledLink>
                                                                            </StyledColleagueWrapper>
                                                                        </SwiperSlide>
                                                                    ))
                                                                }
                                                            </Swiper>
                                                        </StyledSwiper>
                                                        <StyledNavbar>
                                                            <StyledButtonWrapper>
                                                                <Label size="medium" color="black" weight="bold">{activeIndex} / {allocationData.neighbors.length.toString().padStart(2, 0)}</Label>
                                                            </StyledButtonWrapper>
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
                                                    </StyledCaroussel>
                                                </AllocationColleagues>
                                            )
                                        }
                                    </>
                                )
                        }
                    </StyledAllocationScrollable>
                </StyledAllocationInner>
            </StyledAllocationContent>
        </StyledAllocation>
    )
}

export default Allocation;