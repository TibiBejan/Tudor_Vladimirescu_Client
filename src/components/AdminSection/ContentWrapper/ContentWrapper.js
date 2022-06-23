import React from 'react';
import Students from '../Students/Students';
import AccountUpdate from '../../AccountUpdate/AccountUpdate';
import PasswordUpdate from '../../PasswordUpdate/PasswordUpdate';
import { StyledContentWrapper } from './ContentWrapper.style';

function ContentWrapper({activeSection, setActiveSection}) {
  return (
    <StyledContentWrapper>
        {(() => {
            switch(activeSection) {
                case 'students':
                    return <Students />  
                case 'create-students':
                    return <p>Create students</p>  
                case 'update-account':
                    return <AccountUpdate />
                case 'update-password':
                    return <PasswordUpdate />
                default: 
                    return <Students />
            }
        })()}
    </StyledContentWrapper>
  )
}

export default ContentWrapper;