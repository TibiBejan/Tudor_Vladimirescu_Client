import React from 'react';
import Allocation from '../Allocation/Allocation';
import Enrollment from '../Enrollment/Enrollment';
import Accommodation from '../Accommodation/Accommodation';
import Profile from '../Profile/Profile';
import Relatives from '../Relatives/Relatives';
import AccountUpdate from '../../AccountUpdate/AccountUpdate';
import PasswordUpdate from '../../PasswordUpdate/PasswordUpdate';
import { StyledContentWrapper } from './ContentWrapper.style';

function ContentWrapper({activeSection, setActiveSection}) {
  return (
    <StyledContentWrapper>
        {(() => {
            switch(activeSection) {
                case 'allocation':
                    return <Allocation />     
                case 'profile':
                    return <Profile />   
                case 'relatives':
                    return <Relatives />
                case 'enrollment':
                    return <Enrollment />
                case 'accommodate':
                    return <Accommodation setActiveSection={setActiveSection}/>
                case 'update-account':
                    return <AccountUpdate />
                case 'update-password':
                    return <PasswordUpdate />
                default: 
                    return <Allocation />
            }
        })()}
    </StyledContentWrapper>
  )
}

export default ContentWrapper;