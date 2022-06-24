import React, { useState } from 'react';
import { useFormik } from 'formik';
import { createStudentSchema } from '../../../validation/AdminSchema';
import axios from 'axios';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import { HeadingFour, HeadingThree, Paragraph } from '../../../utils/typography';
import { StyledEnrollment, StyledEnrollmentHeading, StyledEnrollmentForm, StyledFormWrapper, StyledForm, StyledButtonGroup, FormHeader, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect, StyledMessageWrapper, StyledMessage } from './CreateStudent.style';

function CreateStudent() {
    // State
    const [ studentData, setStudentData ] = useState({});
    const [ studentDataError, setStudentDataError ] = useState(null);
    const [ studentDataLoading, setStudentDataLoading ] = useState(false);
    const [ formError, setFormError ] = useState('');
    // Functions
    // Functions
    const onSubmit = async (values, {ResetForm}) => {
        try {
            setStudentDataLoading(true);
            const response = await axios.request({
                method: 'POST', 
                url: `${process.env.REACT_APP_API_URL}/admin/users`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setStudentData(response.data.userData);
                setStudentDataError(null);
                setFormError(null);
                ResetForm();
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setStudentDataLoading(false);
        }
    }
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name:'',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
            role:'',
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: createStudentSchema
    });


    return (
        <StyledEnrollment>
            <StyledEnrollmentHeading>
                <HeadingThree dark>Create Student</HeadingThree>
                <Paragraph size="large" color="black">Using this panel, you can create new students or users</Paragraph>
                {formError || studentDataError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || studentDataError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
                {
                    Object.keys(studentData).length !== 0 && (
                        <StyledMessageWrapper background>
                            <StyledMessage>User is created</StyledMessage>
                        </StyledMessageWrapper>
                    )
                }
            </StyledEnrollmentHeading>
            <StyledEnrollmentForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>Create Student</HeadingFour>
                        </FormHeader>
                        <CustomInput type="text" loading={studentDataLoading} id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Student first name"/>
                        <CustomInput type="text" loading={studentDataLoading} id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Student last name"/>
                        <CustomInput type="email" loading={studentDataLoading} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Student e-mail adress"/>
                        <CustomInput type="password" loading={studentDataLoading} id="password" name="password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} placeholder="Student password"/>
                        <CustomInput type="password" loading={studentDataLoading} id="password_confirm" name="password_confirm" value={formik.values.password_confirm} onChange={formik.handleChange} error={formik.errors.password_confirm} placeholder="Confirm Student new password"/>
                        <CustomInput type="text" loading={studentDataLoading}  id="role" name="role" value={formik.values.role} onChange={formik.handleChange} error={formik.errors.role} placeholder="Student role"/>
                        <Button type="submit" textLabel="Create student" />
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledEnrollmentForm>
        </StyledEnrollment>
    )
}

export default CreateStudent;