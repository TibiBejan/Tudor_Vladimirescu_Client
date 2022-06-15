import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { HeadingThree } from '../../utils/typography';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../../layout/button/Button';
import { registerSchema } from '../../validation/AuthSchema';
import { SectionWrapper, StyledSection, StyledSectionInner, ContentWrapper, HeadingForm, StyledMessageWrapper, StyledMessage, StyledForm } from './RegisterSection.style';

function RegisterSection() {
    // State
    const [ formError, setFormError ] = useState('');
    // History router
    const history = useNavigate();

    const onSubmit = async (values) => {
        const user = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password
        }

        try {
            const response = await axios.request({
                method: 'POST', 
                url: `${process.env.REACT_APP_API_URL}/auth/register`, 
                data: user,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                history('/login', { replace: true });
            }
        }
        catch(err) {
            setFormError(err.message);
        }
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: ''
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: registerSchema
    });

    return (
        <SectionWrapper>
            <StyledSection>
                <StyledSectionInner>
                    <ContentWrapper>
                        <HeadingForm>
                            <HeadingThree dark>Register</HeadingThree>    
                            {formError ? (
                                <StyledMessageWrapper background>
                                    <StyledMessage>{formError}</StyledMessage>
                                </StyledMessageWrapper>
                            ) : null }    
                        </HeadingForm>
                        <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                            <CustomInput type="text" id="firstName" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Your first name"/>
                            <CustomInput type="text" id="lastName" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Your last name"/>
                            <CustomInput type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your e-mail adress"/>
                            <CustomInput type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} placeholder="Your password"/>
                            <CustomInput type="password" id="password2" name="password_confirm" value={formik.values.password_confirm} onChange={formik.handleChange} error={formik.errors.password_confirm} placeholder="Confirm your password"/>
                            <Button type="submit" textLabel="Register" />
                        </StyledForm>
                    </ContentWrapper>
                </StyledSectionInner>
            </StyledSection>
        </SectionWrapper>
    )
}

export default RegisterSection;