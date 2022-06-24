import React, { useState } from 'react';
import { useFormik } from 'formik';
import { updateStudentSchema } from '../../../../../validation/AdminSchema';
import axios from 'axios';
import CustomInput from '../../../../CustomInput/CustomInput';
import Button from '../../../../../layout/button/Button';
import { HeadingFour, HeadingThree, Paragraph } from '../../../../../utils/typography';
import { StyledAccountUpdate, StyledAccountUpdateHeading, StyledAccountUpdateForm, StyledFormWrapper, StyledMessageWrapper, StyledMessage, StyledForm, StyledButtonGroup, FormHeader, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect } from './StudentProfileUpdate.style';

function StudentProfileUpdate({studentData}) {
    // State
    const [ studentProfileUpdatedData, setStudentProfileUpdatedData ] = useState({});
    const [ studentProfileUpdatedError, setStudentProfileUpdatedError ] = useState(null);
    const [ studentProfileUpdatedLoading, setStudentProfileUpdatedLoading ] = useState(false);
    const [ formError, setFormError ] = useState('');

    // Functions
    const onSubmit = async (values) => {
        try {
            setStudentProfileUpdatedLoading(true);
            const response = await axios.request({
                method: 'PATCH', 
                url: `${process.env.REACT_APP_API_URL}/admin/users/${studentData.email}`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setStudentProfileUpdatedData(response.data.data);
                setStudentProfileUpdatedError(null);
                setFormError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setStudentProfileUpdatedLoading(false);
        }
    }
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: studentData?.first_name || '',
            last_name: studentData?.last_name || '',
            email: studentData?.email || '',
            role: studentData?.role || ''
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: updateStudentSchema
    });

    return (
        <StyledAccountUpdate>
            <StyledAccountUpdateHeading>
                <HeadingThree dark>Student profile</HeadingThree>
                <Paragraph size="large" color="black">From this panel, you can update student informations</Paragraph>
                {formError || studentProfileUpdatedError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || studentProfileUpdatedError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
            </StyledAccountUpdateHeading>
            <StyledAccountUpdateForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>Update student profile</HeadingFour>
                        </FormHeader>
                        <CustomInput type="text" loading={studentProfileUpdatedLoading} id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Student first name"/>
                        <CustomInput type="text" loading={studentProfileUpdatedLoading} id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Student last name"/>
                        <CustomInput type="email" loading={studentProfileUpdatedLoading} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Student email"/>
                        <CustomInput type="text" loading={studentProfileUpdatedLoading} id="role" name="role" value={formik.values.role} onChange={formik.handleChange} error={formik.errors.role} placeholder="Student role"/>
                        <StyledButtonGroup>
                            <Button type="submit" textLabel="Update student profile" />
                        </StyledButtonGroup>
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledAccountUpdateForm>
        </StyledAccountUpdate>
    )
}

export default StudentProfileUpdate;