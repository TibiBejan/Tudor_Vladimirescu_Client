import React from 'react';
import Students from '../Students/Students';
import AccountUpdate from '../../AccountUpdate/AccountUpdate';
import PasswordUpdate from '../../PasswordUpdate/PasswordUpdate';
import CreateStudent from '../CreateStudent/CreateStudent';
import Halls from '../Halls/Halls';
import University from '../University/University';
import { StyledContentWrapper } from './ContentWrapper.style';

function ContentWrapper({activeSection, setActiveSection}) {
  return (
    <StyledContentWrapper>
        {(() => {
            switch(activeSection) {
                case 'students':
                    return <Students />  
                case 'create-users':
                    return <CreateStudent />  
                case 'halls':
                    return <Halls />  
                case 'universities':
                    return <University />  
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