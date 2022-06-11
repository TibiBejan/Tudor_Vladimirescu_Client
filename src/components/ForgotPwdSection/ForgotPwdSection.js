import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { HeadingThree } from '../../utils/typography';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../../layout/button/Button';
import { forgotPwdSchema } from '../../validation/AuthSchema';
import { SectionWrapper, StyledSection, StyledSectionInner, ContentWrapper, HeadingForm, StyledMessageWrapper, StyledMessage, StyledForm } from './ForgotPwdSection.style';

function ForgotPwdSection() {
    // State
    const [ formError, setFormError ] = useState('');
    const [ currentEmail, setCurrentEmail ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const onSubmit = async (values) => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: "include"
            }
        } 

        setFormError('');
        setCurrentEmail('');
        setLoading(true);
        // INIT REQ
        axios.post("auth/forgot-password", values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                setCurrentEmail(values);
                setLoading(false);
            }
        }).catch(err => {
            setFormError(err.message);
            setLoading(false);
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: forgotPwdSchema
    });

    return (
        <SectionWrapper>
            <StyledSection>
                <StyledSectionInner>
                    <ContentWrapper>
                        <HeadingForm>
                            <HeadingThree dark>Forgot your password ? Please enter your username or email address. You will receive a link by email to create a new password.</HeadingThree>    
                            {formError && (
                                <StyledMessageWrapper background>
                                    <StyledMessage>{formError}</StyledMessage>
                                </StyledMessageWrapper>
                            )}
                            {currentEmail && (
                                <StyledMessageWrapper background>
                                    <StyledMessage>An email has been sent to your e-mail adress. Please follow the provided instructions to reset your password.</StyledMessage>
                                </StyledMessageWrapper>
                            )}  
                            {(loading && (
                                <StyledMessageWrapper background>
                                    <StyledMessage>Please wait...</StyledMessage>
                                </StyledMessageWrapper>
                            ))}  
                        </HeadingForm>
                        <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                            <CustomInput type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your name or e-mail adress"/>
                            <Button type="submit" textLabel="Reset Password" />
                        </StyledForm>
                    </ContentWrapper>
                </StyledSectionInner>
            </StyledSection>
        </SectionWrapper>
    )
}

export default ForgotPwdSection;