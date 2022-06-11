import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { requestLogin, receiveLogin, receiveLoginError } from '../../features/user/userSlice';
import { HeadingThree, Label } from '../../utils/typography';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../../layout/button/Button';
import { loginSchema } from '../../validation/AuthSchema';
import { SectionWrapper, StyledSection, StyledSectionInner, ContentWrapper, HeadingForm, StyledMessageWrapper, StyledMessage, StyledForm, StyledLinks, StyledLink } from './LoginSection.style';

function LoginSection() {
    // State
    const [ formError, setFormError ] = useState('');
    // Redux
    const dispatch = useDispatch();
    // History router
    const history = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (values) => {
        const user = {
            email: values.email,
            password: values.password
        }

        try {
            // INIT REQ
            dispatch(requestLogin());

            const response = await axios.request({method: 'POST', url: "https://campus-tudor-vladimirescu-2022.herokuapp.com/api/v1/auth/login", data: user});
            const { data } = response.data;
            if(response.status === 200 || response.status === 201) {
                dispatch(receiveLogin(data));
                history(from, { replace: true });
            }
        } catch (error) {
            setFormError('Something is wrong with your credentials. Try again or create an account');
            dispatch(receiveLoginError(error.message));
        }
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: loginSchema
    });

    return (
        <SectionWrapper>
            <StyledSection>
                <StyledSectionInner>
                    <ContentWrapper>
                        <HeadingForm>
                            <HeadingThree dark>Log In</HeadingThree>    
                            {formError ? (
                                <StyledMessageWrapper background>
                                    <StyledMessage>{formError}</StyledMessage>
                                </StyledMessageWrapper>
                            ) : null }    
                        </HeadingForm>
                        <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                            <CustomInput type="text" id="username" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your name or e-mail adress"/>
                            <CustomInput type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} placeholder="Your password"/>
                            <Button type="submit" textLabel="Login" />
                        </StyledForm>
                        <StyledLinks>
                            <StyledLink to="/forgot-password">
                                <Label size="large" color="black">Forgot your password</Label>
                            </StyledLink>
                            <Label size="large" color="black">
                                Dont have an account?
                                <StyledLink to="/register">
                                    <Label size="large" color="primaryYellow">Regsiter</Label>
                                </StyledLink>
                            </Label>
                        </StyledLinks>
                    </ContentWrapper>
                </StyledSectionInner>
            </StyledSection>
        </SectionWrapper>
    )
}

export default LoginSection;
