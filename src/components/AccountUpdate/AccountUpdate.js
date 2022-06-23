import React, { useState } from 'react';
import { useFormik } from 'formik';
import { studentUpdateProfileSchema } from '../../validation/StudentSchema';
import axios from 'axios';
// Redux
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/user/userSlice';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../../layout/button/Button';
import { HeadingFour, HeadingThree, Label, Paragraph } from '../../utils/typography';
import { StyledAccountUpdate, StyledAccountUpdateHeading, StyledAccountUpdateForm, StyledFormWrapper, StyledMessageWrapper, StyledMessage, StyledForm, StyledButtonGroup, FormHeader, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect } from './AccountUpdate.style';

function AccountUpdate() {
    // State
    const [ studentProfileUpdatedData, setStudentProfileUpdatedData ] = useState({});
    const [ studentProfileUpdatedError, setStudentProfileUpdatedError ] = useState(null);
    const [ studentProfileUpdatedLoading, setStudentProfileUpdatedLoading ] = useState(false);
    const [ formError, setFormError ] = useState('');
    // Redux
    const { user: userState } = useSelector(userSelector); 
    // Functions
    const onSubmit = async (values) => {
        try {
            setStudentProfileUpdatedLoading(true);
            const response = await axios.request({
                method: 'PATCH', 
                url: `${process.env.REACT_APP_API_URL}/user/update-profile`, 
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
            first_name: userState?.user?.first_name || studentProfileUpdatedData?.first_name || '',
            last_name: userState?.user?.last_name || studentProfileUpdatedData?.last_name || '',
            email: userState?.user?.email || studentProfileUpdatedData?.email || '',
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: studentUpdateProfileSchema
    });

    return (
        <StyledAccountUpdate>
            <StyledAccountUpdateHeading>
                <HeadingThree dark>Student profile</HeadingThree>
                <Paragraph size="large" color="black">From this panel, you can update your account informations</Paragraph>
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
                            <HeadingFour dark>Update your profile</HeadingFour>
                        </FormHeader>
                        <CustomInput type="text" loading={studentProfileUpdatedLoading} id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Your first name"/>
                        <CustomInput type="text" loading={studentProfileUpdatedLoading} id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Your last name"/>
                        <CustomInput type="email" loading={studentProfileUpdatedLoading} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your email"/>
                        <StyledButtonGroup>
                            <Button type="submit" textLabel="Update profile data" />
                        </StyledButtonGroup>
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledAccountUpdateForm>
        </StyledAccountUpdate>
    )
}

export default AccountUpdate;