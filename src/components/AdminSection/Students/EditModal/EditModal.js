import React from 'react';
import ModalWrapper from '../../../ModalWrapper/ModalWrapper';
import StudentProfileUpdate from './StudentProfileUpdate/StudentProfileUpdate';
import StudentPwdUpdate from './StudentPwdUpdate/StudentPwdUpdate';

function EditModal({closeModal, studentData}) {
  return (
    <ModalWrapper closeModal={closeModal}>
      <StudentProfileUpdate studentData={studentData} />
      <StudentPwdUpdate />
    </ModalWrapper>
  )
}

export default EditModal;