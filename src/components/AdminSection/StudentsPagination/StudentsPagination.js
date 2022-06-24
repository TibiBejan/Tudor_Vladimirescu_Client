import React from 'react';
import { Label } from '../../../utils/typography';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
import { PaginationWrapper, StyledUser, StyledUserData, StyledPreviewImage, ActionsGroup, StyledButton } from './StudentsPagination.style';

function StudentsPagination({ currentItems, deleteStudent, togglePreviewModal, toggleEditModal }) {
  return (
    <PaginationWrapper>
        {
            currentItems.length !== 0 && currentItems.map((el) => (
              <StyledUser>
                <StyledUserData>
                  <StyledPreviewImage>
                      <IconContext.Provider value={{size: "2rem", color: "black"}}>
                          <FaUserAlt />
                      </IconContext.Provider>
                  </StyledPreviewImage>
                  <Label size="medium" color="black" fontWeight="bold">{el.first_name} {el.last_name}</Label>
                  <Label size="medium" color="black" fontWeight="bold">{el.hallId ? "Accommodated" : "Registered"}</Label>
                  <Label size="medium" color="black" fontWeight="bold">Role: {el.role}</Label>
                </StyledUserData>
                <ActionsGroup>
                  <StyledButton
                      onClick={() => {
                        togglePreviewModal(prevState => {
                          return {
                            ...prevState,
                            opened: true,
                            data: el
                          }
                        });
                      }}
                  >Preview</StyledButton>
                  <StyledButton
                      onClick={() => {
                        toggleEditModal(prevState => {
                          return {
                            ...prevState,
                            opened: true,
                            data: el
                          }
                        });
                      }}
                  >Edit</StyledButton>
                  <StyledButton 
                      onClick={() => deleteStudent(el.email)}
                  >Delete</StyledButton>
                </ActionsGroup>
              </StyledUser>
            ))
        }
    </PaginationWrapper>
  )
}

export default StudentsPagination;