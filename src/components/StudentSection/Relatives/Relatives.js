import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { createRelativesSchema } from '../../../validation/RelativesSchema';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import Modal from './Modal/Modal';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { HeadingFour, HeadingThree, Label, Paragraph } from '../../../utils/typography';
import { StyledRelatives, StyledRelativesHeading, StyledRelativesList, StyledList, StyledRelativesItemSkeleton, StyledListWrapper, StyledRelativeItem,  StyledRelativesForm, StyledFormWrapper, StyledMessageWrapper, StyledMessage, StyledForm, FormHeader, StyledRelativesGroup, StyledPreviewImage, ActionsGroup, StyledButton  } from './Relatives.style';

function Relatives() {
    // State
    const [ modalToggled, setModalToggled ] = useState(false);
    const [ selectedRelativeId, setSelectedRelativeId ] = useState(null);
    const [ relativesData, setRelativesData ] = useState([]);
    const [ relativesError, setRelativesError ] = useState(null);
    const [ relativesLoading, setRelativesLoading ] = useState(true);
    const [ formError, setFormError ] = useState('');
    // Effect 
    useEffect(() => {
        (async () => {
            try {      
                const response = await axios.request({
                    method: 'GET', 
                    url: `${process.env.REACT_APP_API_URL}/relatives/all`,
                    withCredentials: true,
                });
                if(response.status === 200 || response.status === 201) {
                    setRelativesData(response.data.data);
                    setRelativesError(null);
                } 
            } catch (error) {
                setRelativesError(error.response.data.message);
            } finally {
                setRelativesLoading(false);
            }
        })();
    }, [modalToggled]);
    // Functions
    const onSubmit = async (values, { resetForm }) => {
        try {
            setRelativesLoading(true);
            const response = await axios.request({
                method: 'POST', 
                url: `${process.env.REACT_APP_API_URL}/relatives/`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setRelativesData(response.data.data);
                setRelativesError(null);
                setFormError(null);
                resetForm();
            }
        }
        catch(error) {
            console.log(error);
            setFormError(error.response.data.message);
        } finally {
            setRelativesLoading(false);
        }
    }
    const deleteProfile = async (id) => {
        try {
            setRelativesLoading(true);
            const response = await axios.request({
                method: 'DELETE', 
                url: Object.keys(relativesData).length !== 0 &&  `${process.env.REACT_APP_API_URL}/relatives/${id}`, 
                withCredentials: true,
            });
            if(response.status === 204) {
                const filteredResponse = relativesData.filter(el => el.id !== id)
                setRelativesData(filteredResponse);
                setRelativesError(null);
            }
        }
        catch(error) {
            setFormError(error.response.data.message);
        } finally {
            setRelativesLoading(false);
        }
    }
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: relativesData?.first_name || '',
            last_name: relativesData?.last_name || '',
            email: relativesData?.email || '',
            relation: relativesData?.relation || '',
            adress: relativesData?.adress || '',
            phone_number: relativesData?.phone_number || ''
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: createRelativesSchema
    });

    return (
        <StyledRelatives>
            <StyledRelativesHeading>
                <HeadingThree dark>Student relatives</HeadingThree>
                <Paragraph size="large" color="black">In order to accommodate in our campus, you have to add at least on relative</Paragraph>
                {formError || relativesError ? (
                    <StyledMessageWrapper background>
                        <StyledMessage>{formError || relativesError}</StyledMessage>
                    </StyledMessageWrapper>
                ) : null }    
            </StyledRelativesHeading>
            <StyledRelativesList>
                <StyledListWrapper>
                    <StyledList>
                        {
                            relativesLoading && [...Array(2).keys()].map((_, index) => (
                                <StyledRelativesItemSkeleton key={index}>
                                    <Skeleton baseColor='rgba(124,111,99,.3)'/>
                                </StyledRelativesItemSkeleton>
                            ))
                        }
                        {
                            !relativesLoading && relativesData.length === 0 && (
                                <>
                                    <HeadingThree dark>No relatives created at the moment</HeadingThree>
                                    <Paragraph size="large" color="black">Fill in the form below to create one</Paragraph>
                                </>
                            ) 
                        }
                        {
                            !relativesLoading && relativesData.length !== 0 && relativesData.map(el => (
                                <StyledRelativeItem key={el.id}>
                                    <StyledRelativesGroup>
                                        <StyledPreviewImage>
                                            <IconContext.Provider value={{size: "2rem", color: "black"}}>
                                                <FaUserAlt />
                                            </IconContext.Provider>
                                        </StyledPreviewImage>
                                        <Label size="medium" color="black" fontWeight="bold">{el.first_name} {el.last_name}</Label>
                                        <Label size="medium" color="black" fontWeight="bold">{el.relation}</Label>
                                    </StyledRelativesGroup>
                                    <ActionsGroup>
                                        <StyledButton
                                            onClick={() => {
                                                setSelectedRelativeId(el.id)
                                                setModalToggled(true);
                                            }}
                                        >Preview</StyledButton>
                                        <StyledButton 
                                            onClick={() => deleteProfile(el.id)}
                                        >Delete</StyledButton>
                                    </ActionsGroup>
                                </StyledRelativeItem>
                            ))
                        }
                    </StyledList>
                </StyledListWrapper>
            </StyledRelativesList>
            <StyledRelativesForm>
                <StyledFormWrapper>
                    <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                        <FormHeader>
                            <HeadingFour dark>Add relatives</HeadingFour>
                        </FormHeader>
                        <CustomInput type="text" loading={relativesLoading} id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Your first name"/>
                        <CustomInput type="text" loading={relativesLoading} id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Your last name"/>
                        <CustomInput type="email" loading={relativesLoading} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your email"/>
                        <CustomInput type="text" loading={relativesLoading} id="relation" name="relation" value={formik.values.relation} onChange={formik.handleChange} error={formik.errors.relation} placeholder="Your relative relation"/>
                        <CustomInput type="text" loading={relativesLoading} id="adress" name="adress" value={formik.values.adress} onChange={formik.handleChange} error={formik.errors.adress} placeholder="Your street adress"/>
                        <CustomInput type="text" loading={relativesLoading} id="phone_number" name="phone_number" value={formik.values.phone_number} onChange={formik.handleChange} error={formik.errors.phone_number} placeholder="Your phone number"/>
                        <Button type="submit" textLabel="Create user relation" />
                    </StyledForm> 
                </StyledFormWrapper>
            </StyledRelativesForm>
            {
                modalToggled && <Modal closeModal={() => setModalToggled(false)} selectedRelative={relativesData.length !== 0 && relativesData.filter(el => el.id === selectedRelativeId)[0]}/>
            }
        </StyledRelatives>
    )
}

export default Relatives;