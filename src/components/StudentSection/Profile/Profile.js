import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { studentInformationSchema } from '../../../validation/StudentSchema';
import axios from 'axios';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import { HeadingFour, HeadingThree, Label, Paragraph } from '../../../utils/typography';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledProfile, StyledProfileHeading, StyledProfileForm, StyledFormWrapper, StyledMessageWrapper, StyledMessage, StyledForm, StyledButtonGroup, FormHeader, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect } from './Profile.style';

function Profile() {
    // State
    const [ studentProfileData, setStudentProfileData ] = useState({});
    const [ studentProfileError, setStudentProfileError ] = useState(null);
    const [ studentProfileLoading, setStudentProfileLoading ] = useState(true);
    const [ formError, setFormError ] = useState('');
    // Effect 
    useEffect(() => {
        (async () => {
            try {      
                const response = await axios.request({
                    method: 'GET', 
                    url: `${process.env.REACT_APP_API_URL}/student/profile`,
                    withCredentials: true,
                });
                if(response.status === 200 || response.status === 201) {
                    setStudentProfileData(response.data.data);
                    setStudentProfileError(null);
                } 
            } catch (error) {
                setStudentProfileError(error.response.data.message);
            } finally {
                setStudentProfileLoading(false);
            }
        })();
    }, []);
    // Functions
    const onSubmit = async (values) => {
        try {
            setStudentProfileLoading(true);
            const response = await axios.request({
                method: Object.keys(studentProfileData).length !== 0 ? 'PATCH' : 'POST', 
                url: Object.keys(studentProfileData).length !== 0 ?  `${process.env.REACT_APP_API_URL}/student/profile/${studentProfileData.username}` : `${process.env.REACT_APP_API_URL}/student/profile`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setStudentProfileData(response.data.data);
                setStudentProfileError(null);
                setFormError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setStudentProfileLoading(false);
        }
    }
    const deleteProfile = async () => {
        try {
            setStudentProfileLoading(true);
            const response = await axios.request({
                method: 'DELETE', 
                url: Object.keys(studentProfileData).length !== 0 &&  `${process.env.REACT_APP_API_URL}/student/profile/${studentProfileData.username}`, 
                withCredentials: true,
            });
            if(response.status === 204) {
                setStudentProfileData({});
                setStudentProfileError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setStudentProfileLoading(false);
        }
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            username: studentProfileData?.username || '',
            dob: studentProfileData?.dob || '',
            gender: studentProfileData?.gender || '',
            nationality: studentProfileData?.nationality || '',
            phone_number: studentProfileData?.phone_number || '',
            street_adress: studentProfileData?.street_adress || '',
            city: studentProfileData?.city || '',
            state: studentProfileData?.state || '',
            country: studentProfileData?.country || '',
            zip_code: studentProfileData?.zip_code || '',
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: studentInformationSchema
    });

    return (
        <StyledProfile>
            <StyledProfileHeading>
                <HeadingThree dark>Student profile</HeadingThree>
                <Paragraph size="large" color="black">In order to accommodate in our campus, you have to update your personal informations</Paragraph>
                {formError || studentProfileError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || studentProfileError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
                {
                    Object.keys(studentProfileData).length !== 0 && (
                        <StyledMessageWrapper background>
                            <StyledMessage>Your data is updated</StyledMessage>
                        </StyledMessageWrapper>
                    )
                }
            </StyledProfileHeading>
            <StyledProfileForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>{
                                Object.keys(studentProfileData).length !== 0 
                                    ? "Update your profile information"
                                    : "Declare your profile information"
                            }</HeadingFour>
                        </FormHeader>
                        <CustomInput type="text" loading={studentProfileLoading} id="username" name="username" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username} placeholder="Your username"/>
                        <CustomInput type="date" loading={studentProfileLoading} id="dob" name="dob" value={formik.values.dob} onChange={formik.handleChange} error={formik.errors.dob} placeholder="Your date of birth"/>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="gender">Your gender</Label>
                            {
                                studentProfileLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="gender"
                                                name="gender"
                                                value={formik.values.gender}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choosy your gender" />
                                                <option value="Female" label="Female" />
                                                <option value="Male" label="Male" />
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.gender  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.gender}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <CustomInput type="text" loading={studentProfileLoading} id="nationality" name="nationality" value={formik.values.nationality} onChange={formik.handleChange} error={formik.errors.nationality} placeholder="Your nationality"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="phone_number" name="phone_number" value={formik.values.phone_number} onChange={formik.handleChange} error={formik.errors.phone_number} placeholder="Your phone number"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="street_adress" name="street_adress" value={formik.values.street_adress} onChange={formik.handleChange} error={formik.errors.street_adress} placeholder="Your street adress"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="city" name="city" value={formik.values.city} onChange={formik.handleChange} error={formik.errors.city} placeholder="Your city"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="state" name="state" value={formik.values.state} onChange={formik.handleChange} error={formik.errors.state} placeholder="Your state"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="country" name="country" value={formik.values.country} onChange={formik.handleChange} error={formik.errors.country} placeholder="Your country"/>
                        <CustomInput type="text" loading={studentProfileLoading} id="zip_code" name="zip_code" value={formik.values.zip_code} onChange={formik.handleChange} error={formik.errors.zip_code} placeholder="Your zip code"/>
                        <StyledButtonGroup>
                            <Button type="submit" textLabel={Object.keys(studentProfileData).length !== 0 ? "Update profile data" : "Create profile data"} />
                            {
                                Object.keys(studentProfileData).length !== 0 && (
                                    <Button type="button" onClick={deleteProfile} textLabel="Delete profile data" />
                                )
                            }
                        </StyledButtonGroup>
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledProfileForm>
        </StyledProfile>
    )
}

export default Profile;