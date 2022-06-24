import React, { useState } from 'react';
import { useFormik } from 'formik';
import { updateStudentPasswordSchema } from '../../../../../validation/AdminSchema';
import axios from 'axios';
import CustomInput from '../../../../CustomInput/CustomInput';
import Button from '../../../../../layout/button/Button';
import { HeadingFour, HeadingThree, Paragraph } from '../../../../../utils/typography';
import { StyledPasswordUpdate, StyledAccountUpdateHeading, StyledPasswordUpdateForm, StyledFormWrapper, StyledMessageWrapper, StyledMessage, StyledForm, StyledButtonGroup, FormHeader } from './StudentPwdUpdate.style';

function StudentPwdUpdate({studentData}) {
    // State
    const [ studentPasswordUpdated, setStudentPasswordUpdated ] = useState(false);
    const [ studentPasswordUpdatedError, setStudentPasswordUpdatedError ] = useState(null);
    const [ studentPasswordUpdatedLoading, setStudentPasswordUpdatedLoading ] = useState(false);
    const [ formError, setFormError ] = useState('');
    // Functions
    const onSubmit = async (values, { resetForm }) => {
        try {
          setStudentPasswordUpdatedLoading(true);
          const response = await axios.request({
            method: 'PATCH', 
            url: `${process.env.REACT_APP_API_URL}/admin/users/${studentData.email}/password`, 
            data: values,
            withCredentials: true,
          });
          if(response.status === 200 || response.status === 201) {
            setStudentPasswordUpdated(true);
            setStudentPasswordUpdatedError(null);
            setFormError(null);
            resetForm();
          }
        }
        catch(error) {
          setFormError(error.response.data.message);
        } finally {
          setStudentPasswordUpdatedLoading(false);
        }
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            password_confirm: '',
            password_new: '',
            password_new_confirm: '',
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: updateStudentPasswordSchema
    });

    return (
        <StyledPasswordUpdate>
            <StyledAccountUpdateHeading>
                <HeadingThree dark>Student password</HeadingThree>
                <Paragraph size="large" color="black">From this panel, you can update sutdent password</Paragraph>
                {formError || studentPasswordUpdatedError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || studentPasswordUpdatedError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
                {
                    studentPasswordUpdated && (
                    <StyledMessageWrapper background>
                        <StyledMessage>Your password is updated</StyledMessage>
                    </StyledMessageWrapper>
                    )
                }
            </StyledAccountUpdateHeading>
            <StyledPasswordUpdateForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>Update student password</HeadingFour>
                        </FormHeader>
                        <CustomInput type="password" loading={studentPasswordUpdatedLoading} id="password_confirm" name="password_confirm" value={formik.values.password_confirm} onChange={formik.handleChange} error={formik.errors.password_confirm} placeholder="Student current password"/>
                        <CustomInput type="password" loading={studentPasswordUpdatedLoading} id="password_new" name="password_new" value={formik.values.password_new} onChange={formik.handleChange} error={formik.errors.password_new} placeholder="Student new password"/>
                        <CustomInput type="password" loading={studentPasswordUpdatedLoading} id="password_new_confirm" name="password_new_confirm" value={formik.values.password_new_confirm} onChange={formik.handleChange} error={formik.errors.password_new_confirm} placeholder="Confirm student new password"/>
                        <StyledButtonGroup>
                            <Button type="submit" textLabel="Update your password" />
                        </StyledButtonGroup>
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledPasswordUpdateForm>
        </StyledPasswordUpdate>
    )
}

export default StudentPwdUpdate
