import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { HeadingThree } from '../../utils/typography';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../../layout/button/Button';
import { resetPwdSchema } from '../../validation/AuthSchema';
import { SectionWrapper, StyledSection, StyledSectionInner, ContentWrapper, HeadingForm, StyledMessageWrapper, StyledMessage, StyledForm } from './ResetPwdSection.style';

function ResetPwdSection() {
    // State
    const [ formError, setFormError ] = useState('');
    // History router
    const history = useNavigate();
    const params = useParams();

    const onSubmit = async (values) => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            }
        }

        axios.patch(`auth/reset-password/${params.token}`, values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                history('/login');
            }
        }).catch(err => {
            setFormError(err.message);
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            password: '',
            password_confirm: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: resetPwdSchema
    });


    return (
        <SectionWrapper>
            <StyledSection>
                <StyledSectionInner>
                    <ContentWrapper>
                        <HeadingForm>
                            <HeadingThree dark>Please fill the fields below to reset your current password, then click the lick below to log in.</HeadingThree>    
                            {formError && (
                                <StyledMessageWrapper background>
                                    <StyledMessage>{formError}</StyledMessage>
                                </StyledMessageWrapper>
                            )}
                        </HeadingForm>
                        <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                            <CustomInput type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} placeholder="Your password"/>
                            <CustomInput type="password" id="password_confirm" name="password_confirm" value={formik.values.password_confirm} onChange={formik.handleChange} error={formik.errors.password_confirm} placeholder="Your password"/>
                            <Button type="submit" textLabel="Reset Password" />
                        </StyledForm>
                    </ContentWrapper>
                </StyledSectionInner>
            </StyledSection>
        </SectionWrapper>
    )
}

export default ResetPwdSection;