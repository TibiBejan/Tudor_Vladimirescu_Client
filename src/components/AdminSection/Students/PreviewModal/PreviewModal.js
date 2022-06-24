import React from 'react';
import { Link } from 'react-router-dom';
import { HeadingThree, Paragraph } from '../../../../utils/typography';
import Image from '../../../Image/Image';
import ModalWrapper from '../../../ModalWrapper/ModalWrapper';
import { Label } from '../../../../utils/typography';
import { StyledHeading, StyledContent, StyledInner, StyledScrollable, HallWrapper, HallActionLink, Details, DetailsList, ListItem } from './PreviewModal.style';

function PreviewModal({closeModal, studentData}) {
    return (
        <ModalWrapper closeModal={closeModal}>
            <StyledHeading>
                <HeadingThree dark>Student accommodation</HeadingThree>
                <Paragraph size="large" color="black">From this panel, you can see current user's informations</Paragraph>
            </StyledHeading>
            <StyledContent>
                <StyledInner>
                    <StyledScrollable>
                        {
                            studentData.hallId && (
                                <Link to={`/halls/t${studentData.hallId}`}>
                                    <HallWrapper>
                                        <Image fileName={`halls/residence-hall-t${studentData.hallId}.jpg`} alt={`Residence Hall T${studentData.hallId}`}/>
                                        <HallActionLink>
                                            <Label size="large" fontWeight="bold" uppercase>Residence Hall T{studentData.hallId}</Label>
                                        </HallActionLink>
                                    </HallWrapper>
                                </Link>
                            )
                        }
                        <Details>
                            <DetailsList>
                                <ListItem>
                                    <Label size="large" color="black">Name: {studentData.first_name} {studentData.last_name}</Label>
                                </ListItem>
                                <ListItem>
                                    <Label size="large" color="black">User role: {studentData.role}</Label>
                                </ListItem>
                                <ListItem>
                                    <Label size="large" color="black">Residence Hall: {studentData.hallId ? `T${studentData.hallId}`: "Not accommodated yet"}</Label>
                                </ListItem>
                                <ListItem>
                                    <Label size="large" color="black">E-mail: {studentData.email}</Label>
                                </ListItem>
                                <ListItem>
                                    <Label size="large" color="black">Enrolled: {studentData.Enrollment ? "Student enrolled" : "Student not enrolled yet"}</Label>
                                </ListItem>
                                {
                                    studentData.Enrollment && (
                                        <>
                                            <ListItem>
                                                <Label size="large" color="black">University: {studentData.Enrollment.university}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Financial type: {studentData.Enrollment.financial_type}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Type of Study: {studentData.Enrollment.type_of_study}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Year of Study: {studentData.Enrollment.year_of_study}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Grade: {studentData.Enrollment.grade}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Nationality: {studentData.Enrollment.nationality}</Label>
                                            </ListItem>
                                            <ListItem>
                                                <Label size="large" color="black">Gender: {studentData.Enrollment.student_gender}</Label>
                                            </ListItem>
                                        </>
                                    )
                                }
                            </DetailsList>
                        </Details>
                    </StyledScrollable>
                </StyledInner>
            </ StyledContent>
        </ModalWrapper>
    )
}

export default PreviewModal;