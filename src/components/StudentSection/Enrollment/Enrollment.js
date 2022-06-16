import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { enrollSchema } from '../../../validation/EnrollmentSchema';
import axios from 'axios';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import { HeadingFour, HeadingThree, Label, Paragraph } from '../../../utils/typography';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledEnrollment, StyledEnrollmentHeading, StyledEnrollmentForm, StyledFormWrapper, StyledForm, StyledButtonGroup, FormHeader, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect, StyledMessageWrapper, StyledMessage } from './Enrollment.style';

function Enrollment() {
    // State
    const [ enrollmenteData, setEnrollmentData ] = useState({});
    const [ enrollmentError, setEnrollmentError ] = useState(null);
    const [ enrollmentLoading, setEnrollmentLoading ] = useState(true);
    const [ formError, setFormError ] = useState('');
    // Effect 
    useEffect(() => {
        (async () => {
            try {      
                const response = await axios.request({
                    method: 'GET', 
                    url: `${process.env.REACT_APP_API_URL}/user/enrollment`,
                    withCredentials: true,
                });
                if(response.status === 200 || response.status === 201) {
                    setEnrollmentData(response.data.data);
                    setEnrollmentError(null);
                } 
            } catch (error) {
                setEnrollmentError(error.response.data.message);
            } finally {
                setEnrollmentLoading(false);
            }
        })();
    }, []);
    // Functions
    const onSubmit = async (values) => {
        try {
            setEnrollmentLoading(true);
            const response = await axios.request({
                method: Object.keys(enrollmenteData).length !== 0 ? 'PATCH' : 'POST', 
                url: Object.keys(enrollmenteData).length !== 0 ?  `${process.env.REACT_APP_API_URL}/user/enrollment/${enrollmenteData.id}` : `${process.env.REACT_APP_API_URL}/user/enrollment`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setEnrollmentData(response.data.data);
                setEnrollmentError(null);
                setFormError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setEnrollmentLoading(false);
        }
    }
    const deleteEnrollment = async () => {
        try {
            setEnrollmentLoading(true);
            const response = await axios.request({
                method: 'DELETE', 
                url: Object.keys(enrollmenteData).length !== 0 &&  `${process.env.REACT_APP_API_URL}/user/enrollment/${enrollmenteData.id}`, 
                withCredentials: true,
            });
            if(response.status === 204) {
                setEnrollmentData({});
                setEnrollmentError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setEnrollmentLoading(false);
        }
    }
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            university: enrollmenteData?.university || '',
            year_of_study: enrollmenteData?.year_of_study || '',
            type_of_study: enrollmenteData?.type_of_study || '',
            grade: enrollmenteData?.grade || '',
            financial_type: enrollmenteData?.financial_type || '',
            nationality: enrollmenteData?.nationality || '',
            student_gender: enrollmenteData?.student_gender || '',
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: enrollSchema
    });

    return (
        <StyledEnrollment>
            <StyledEnrollmentHeading>
                <HeadingThree dark>Student enrollment</HeadingThree>
                <Paragraph size="large" color="black">In order to accommodate in our campus, you have to update your enrollment informations</Paragraph>
                {formError || enrollmentError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || enrollmentError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
                {
                    Object.keys(enrollmenteData).length !== 0 && (
                        <StyledMessageWrapper background>
                            <StyledMessage>Your data is updated</StyledMessage>
                        </StyledMessageWrapper>
                    )
                }
            </StyledEnrollmentHeading>
            <StyledEnrollmentForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>{
                                Object.keys(enrollmenteData).length !== 0 
                                    ? "Update your profile information"
                                    : "Declare your profile information"
                            }</HeadingFour>
                        </FormHeader>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="university">Your university</Label>
                            {
                                enrollmentLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="university"
                                                name="university"
                                                value={formik.values.university}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choose your university" />
                                                <option value="Facultatea de Ştiinţa şi Ingineria Materialelor" label="Facultatea de Ştiinţa şi Ingineria Materialelor" />
                                                <option value="Facultatea de Mecanică" label="Facultatea de Mecanică Iaşi" />
                                                <option value="Facultatea de Inginerie Electrică, Energetică şi Informatică Aplicată" label="Facultatea de Inginerie Electrică, Energetică şi Informatică Aplicată" />
                                                <option value="Facultatea de Inginerie Chimică și Protecția Mediului „Cristofor Simionescu”" label="Facultatea de Inginerie Chimică și Protecția Mediului „Cristofor Simionescu”" />
                                                <option value="Facultatea de Hidrotehnică, Geodezie şi Ingineria Mediului" label="Facultatea de Hidrotehnică, Geodezie şi Ingineria Mediului" />
                                                <option value="Facultatea de Electronică, Telecomunicaţii şi Tehnologia Informaţiei" label="Facultatea de Electronică, Telecomunicaţii şi Tehnologia Informaţiei" />
                                                <option value="Facultatea de Design Industrial și Managementul Afacerilor" label="Facultatea de Design Industrial și Managementul Afacerilor" />
                                                <option value="Facultatea de Construcţii şi Instalaţii" label="Facultatea de Construcţii şi Instalaţii" />
                                                <option value="Facultatea de Automatică și Calculatoare" label="Facultatea de Automatică și Calculatoare" />
                                                <option value="Facultatea de Arhitectură „G.M. Cantacuzino”" label="Facultatea de Arhitectură „G.M. Cantacuzino”" />
                                                <option value="Facultatea Construcţii de Maşini și Management Industrial" label="Facultatea Construcţii de Maşini și Management Industrial" />
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.university  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.university}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="year_of_study">Your year of study</Label>
                            {
                                enrollmentLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="year_of_study"
                                                name="year_of_study"
                                                value={formik.values.year_of_study}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choose your year of study" />
                                                { (formik.values.type_of_study === 'License' || formik.values.type_of_study === '')&& (
                                                    <>
                                                        <option value="1" label="1" />
                                                        <option value="2" label="2" />
                                                        <option value="3" label="3" />
                                                        <option value="4" label="4" />
                                                        <option value="5" label="5" />
                                                        <option value="6" label="6" />
                                                    </>
                                                )}

                                                {(formik.values.type_of_study === 'Master' || formik.values.type_of_study === 'Doctorate') && (
                                                    <>
                                                        <option value="1" label="1" />
                                                        <option value="2" label="2" />
                                                    </>
                                                )}
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.year_of_study  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.year_of_study}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="type_of_study">Your study type</Label>
                            {
                                enrollmentLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="type_of_study"
                                                name="type_of_study"
                                                value={formik.values.type_of_study}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choosy your study type" />
                                                <option value="License" label="License" />
                                                <option value="Master" label="Master" />
                                                <option value="Doctorate" label="Doctorate" />
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.type_of_study  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.type_of_study}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <CustomInput type="number" min="0" max="10" step="0.01" loading={enrollmentLoading} id="grade" name="grade" value={formik.values.grade} onChange={formik.handleChange} error={formik.errors.grade} placeholder="Your grade"/>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="financial_type">Your financial type</Label>
                            {
                                enrollmentLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="financial_type"
                                                name="financial_type"
                                                value={formik.values.financial_type}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choosy your financial type" />
                                                <option value="Budget" label="Budget" />
                                                <option value="Toll" label="Toll" />
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.financial_type  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.financial_type}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <CustomInput type="text" loading={enrollmentLoading} id="nationality" name="nationality" value={formik.values.nationality} onChange={formik.handleChange} error={formik.errors.nationality} placeholder="Your nationality"/>
                        <StyledFormGroup>
                            <Label color="black" htmlFor="student_gender">Your gender</Label>
                            {
                                enrollmentLoading
                                    ? (
                                        <SkeletonWrapper>
                                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                        </SkeletonWrapper>
                                    )
                                    : (
                                        <StyledInputWrapper>
                                            <StyledSelect
                                                id="student_gender"
                                                name="student_gender"
                                                value={formik.values.student_gender}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="" label="Choosy your gender" />
                                                <option value="Female" label="Female" />
                                                <option value="Male" label="Male" />
                                            </StyledSelect>
                                        </StyledInputWrapper>
                                    )
                            }
                            {formik.errors.student_gender  && 
                                <StyledMessageWrapper>
                                    <StyledMessage>{formik.errors.student_gender}</StyledMessage>
                                </StyledMessageWrapper>
                            }  
                        </StyledFormGroup>
                        <StyledButtonGroup>
                            <Button type="submit" textLabel={Object.keys(enrollmenteData).length !== 0 ? "Update enrollment" : "Create enrollment"} />
                            {
                                Object.keys(enrollmenteData).length !== 0 && (
                                    <Button type="button" onClick={deleteEnrollment} textLabel="Delete enrollment" />
                                )
                            }
                        </StyledButtonGroup>
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledEnrollmentForm>
        </StyledEnrollment>
    )
}

export default Enrollment;