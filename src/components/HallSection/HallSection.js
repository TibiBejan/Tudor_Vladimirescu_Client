import React from 'react';
import { HeadingThree, Label } from '../../utils/typography';
import Image from '../Image/Image';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledSection, SectionInner, SectionContent, SectionWrapper, SectionContentDescription, DescriptionListItem, SectionImage } from './HallSection.style';

function HallSection({data, loaded, error}) {
    return (
        <StyledSection>
            <SectionInner>
                <SectionWrapper>
                    <SectionContent>
                        {
                            loaded && data ? (
                                <>
                                    <HeadingThree dark>Residence Hall {data.hall_name}</HeadingThree>
                                    <SectionContentDescription>
                                        <DescriptionListItem>
                                            <Label color="black">{`Adress: ${data.hall_adress}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Phone: ${data.contact_number}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Description: ${data.description}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Facilities: ${data.facilities}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Bathroom: ${data.bathroom}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Universities: ${data.universities.join(', ')}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Students: ${data.total_students}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Rooms: ${data.total_rooms}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Neighbours: ${data.students_in_room}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Min grade: ${data.min_grade}`}</Label>
                                        </DescriptionListItem>
                                        <DescriptionListItem>
                                            <Label color="black">{`Max grade: ${data.max_grade}`}</Label>
                                        </DescriptionListItem>
                                    </SectionContentDescription>
                                </>
                            ) : (
                                <Skeleton />
                            )
                        }
                    </SectionContent>
                    <SectionImage>
                        {
                            loaded ? (
                                <Image fileName={`halls/residence-hall-t${data?.hall_number}.jpg`} alt={`Residence Hall ${data?.hall_name}`}/>
                            ) : (
                                <Skeleton />
                            )
                        }
                    </SectionImage>
                </SectionWrapper>
            </SectionInner>
        </StyledSection>
    )
}

export default HallSection;