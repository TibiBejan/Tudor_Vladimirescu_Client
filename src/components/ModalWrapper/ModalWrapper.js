import React from 'react';
import { HeadingFour } from '../../utils/typography';
import { StyledModal, StyledModalInner, ModalContent, ModalContentInner, StyledRow, StyledButton } from './ModalWrapper.style';

function ModalWrapper({ children, closeModal, title }) {
    return (
        <StyledModal>
            <StyledModalInner>
                <StyledRow>
                    <HeadingFour dark>{title}</HeadingFour>
                    <StyledButton onClick={() => closeModal()}>Close modal</StyledButton>
                </StyledRow>
                <ModalContent>
                    <ModalContentInner>
                        {children}
                    </ModalContentInner>
                </ModalContent>
            </StyledModalInner>
        </StyledModal>
    )
}

export default ModalWrapper;