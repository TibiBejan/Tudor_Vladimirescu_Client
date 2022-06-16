import React, { useState } from 'react';
import { useFormik } from 'formik';
import { createRelativesSchema } from '../../../../validation/RelativesSchema';
import axios from 'axios';
import Button from '../../../../layout/button/Button';
import { Paragraph } from '../../../../utils/typography';
import CustomInput from '../../../CustomInput/CustomInput';
import ModalWrapper from '../../../ModalWrapper/ModalWrapper';
import { StyledForm, FormHeader, StyledMessageWrapper, StyledMessage } from './Modal.style';

function Modal({closeModal, selectedRelative}) {
    // State 
    const [ updatedRelative, setUpdatedRelative ] = useState({});
    const [ relativeError, setRelativeError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ formError, setFormError ] = useState(null);
    // Functions
    const onSubmit = async (values) => {
        try {
            setLoading(true);
            const response = await axios.request({
                method: 'PATCH', 
                url: `${process.env.REACT_APP_API_URL}/relatives/${selectedRelative.id}`, 
                data: values,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                setUpdatedRelative(response.data.data);
                setRelativeError(null);
            }
        }
        catch(error) {
            console.log(error);
            setFormError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.first_name: selectedRelative?.first_name,
            last_name: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.last_name: selectedRelative?.last_name,
            email: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.email: selectedRelative?.email,
            relation: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.relation: selectedRelative?.relation,
            adress: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.adress: selectedRelative?.adress,
            phone_number: Object.keys(updatedRelative).length !== 0 ? updatedRelative?.phone_number: selectedRelative?.phone_number,
        },
        enableReinitialize: true,
        onSubmit,
        validationSchema: createRelativesSchema
    });

    return (
        <ModalWrapper title={"Update current relative"} closeModal={closeModal}>
            <StyledForm method="POST" onSubmit={formik.handleSubmit}>
                <FormHeader>
                    {
                        Object.keys(updatedRelative).length !== 0 && (
                            <StyledMessageWrapper background>
                                <Paragraph size="large" color="black">Current relative updated</Paragraph>
                            </StyledMessageWrapper>
                        )

                    }
                    {formError || relativeError ? (
                        <StyledMessageWrapper background>
                            <StyledMessage>{formError || relativeError}</StyledMessage>
                        </StyledMessageWrapper>
                    ) : null }    
                </FormHeader>
                <CustomInput type="text" loading={loading} id="first_name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} error={formik.errors.first_name} placeholder="Your first name"/>
                <CustomInput type="text" loading={loading} id="last_name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} error={formik.errors.last_name} placeholder="Your last name"/>
                <CustomInput type="email" loading={loading} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} placeholder="Your email"/>
                <CustomInput type="text" loading={loading} id="relation" name="relation" value={formik.values.relation} onChange={formik.handleChange} error={formik.errors.relation} placeholder="Your relative relation"/>
                <CustomInput type="text" loading={loading} id="adress" name="adress" value={formik.values.adress} onChange={formik.handleChange} error={formik.errors.adress} placeholder="Your street adress"/>
                <CustomInput type="text" loading={loading} id="phone_number" name="phone_number" value={formik.values.phone_number} onChange={formik.handleChange} error={formik.errors.phone_number} placeholder="Your phone number"/>
                <Button type="submit" textLabel="Update user relation" />
            </StyledForm> 
        </ModalWrapper>
    )
}

export default Modal;