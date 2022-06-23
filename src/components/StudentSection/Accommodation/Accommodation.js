import React, {useState} from 'react';
import axios from 'axios';
import { HeadingThree, Paragraph } from '../../../utils/typography';
import Button from '../../../layout/button/Button';
import StudentChecker from './StudentChecker/StudentChecker';
import { StyledAccommodation, StyledAccommodationHeading, StyledAccommodationContent, StyledButtonWrapper, StyledMessageWrapper, StyledMessage } from './Accommodation.style';

const STUDENT_URLS = [
    {
        reqId: 1,
        reqLink: `${process.env.REACT_APP_API_URL}/student/profile`,
        reqLabel: 'Profile informations',
        keyword: 'profile'
    },
    {
        reqId: 1,
        reqLink: `${process.env.REACT_APP_API_URL}/relatives/all`,
        reqLabel: 'Student Relatives',
        keyword: 'relatives'
    },
    {
        reqId: 1,
        reqLink: `${process.env.REACT_APP_API_URL}/user/enrollment`,
        reqLabel: 'Student Enrollment',
        keyword: 'enrollment'
    }
];

function Accommodation({ setActiveSection }) {
    // State
    const [ incompleteTasks, setIncompleteTasks ] = useState([]);
    const [ allocationError, setAllocationError ] = useState(null);
    // Functions
    const submitAllocation = async () => {
        try {
            const response = await axios.request({
                method: 'GET', 
                url: `${process.env.REACT_APP_API_URL}/user/allocation`, 
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setActiveSection('allocation');
            }
        } catch (error) {
            setAllocationError(error.response.data.message);
            // if(error.response.status === 500) {
            //     setActiveSection('allocation');
            // }
        }
    }

    return (
        <StyledAccommodation>
            <StyledAccommodationHeading>
                <HeadingThree dark>Student accommodation</HeadingThree>
                <Paragraph size="large" color="black">In order to complete the accommodation process, follow the steps below</Paragraph>
                {allocationError && (
                    <StyledMessageWrapper background>
                        <StyledMessage>{allocationError}</StyledMessage>
                    </StyledMessageWrapper>
                )}    
            </StyledAccommodationHeading>
            <StyledAccommodationContent>
                {
                    STUDENT_URLS.map(url => (
                        <StudentChecker key={url.id} URL={url.reqLink} label={url.reqLabel} setIncompleteTasks={setIncompleteTasks}/>
                    ))
                }
                <StyledButtonWrapper>
                    <Button 
                        type="button" 
                        disabled={incompleteTasks.length !== 0} 
                        onClick={() => submitAllocation()} 
                        textLabel="Get accommodation now" 
                    />
                </StyledButtonWrapper>
            </StyledAccommodationContent>
        </StyledAccommodation>
    )
}

export default Accommodation