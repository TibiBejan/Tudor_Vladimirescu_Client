import React from 'react';
import Enrollment from '../Enrollment/Enrollment';
import Profile from '../Profile/Profile';
import Relatives from '../Relatives/Relatives';
import { StyledContentWrapper } from './ContentWrapper.style';

function ContentWrapper({activeSection, setActiveSection}) {
  return (
    <StyledContentWrapper>
        {(() => {
            switch(activeSection) {
                case 'allocation':
                    return <p>Allocation</p>     
                case 'profile':
                    return <Profile />   
                case 'relatives':
                    return <Relatives />
                case 'enrollment':
                    return <Enrollment />
                default: 
                    return <p>Profile</p>
            }
        })()}
    </StyledContentWrapper>
  )
}

export default ContentWrapper;