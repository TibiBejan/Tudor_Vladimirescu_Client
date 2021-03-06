import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { adminSearchSchema } from '../../../validation/AdminSchema';
import axios from 'axios';
import { HeadingThree, Label, Paragraph } from '../../../utils/typography';
import PaginatedItems from '../../PaginatedItems/PaginatedItems';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import PreviewModal from './PreviewModal/PreviewModal';
import EditModal from './EditModal/EditModal';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledStudents, StyledStudentsHeading, StyledForm, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect, StyledMessageWrapper, StyledMessage, StyledStudentsContent } from './Students.style';

function Students() {
  // State
  const [ studentsData, setStudentsData ] = useState([]);
  const [ studentsDataError, setStudentsDataError ] = useState(null);
  const [ studentsDataLoading, setStudentsDataLoading ] = useState(true);
  const [ formError, setFormError ] = useState('');
  const [ previewModal, setPreviewModal ] = useState({
    opened: false,
    data: null
  });
  const [ editModal, setEditModal ] = useState({
    opened: false,
    data: null
  });
  // Effect 
  useEffect(() => {
    (async () => {
        try {      
            const response = await axios.request({
                method: 'GET', 
                url: `${process.env.REACT_APP_API_URL}/admin/users`,
                withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
              setStudentsData(response.data.students);
              setStudentsDataError(null);
            } 
        } catch (error) {
          setStudentsDataError(error.response.data.message);
        } finally {
          setStudentsDataLoading(false);
        }
    })();
  }, []);
  // Functions
  const onSubmit = async (values) => {
    try {
      let reqUrl = null;
      if(values.university && values.searchQuerry) {
          reqUrl = `${process.env.REACT_APP_API_URL}/admin/users-query?${values.university ? `university=${values.university}` : ''}&${values.searchQuerry ? `searchQuerry=${values.searchQuerry}` : ''}`;
      } else if(values.university && (!values.searchQuerry || values.searchQuerry === '')) {
          reqUrl = `${process.env.REACT_APP_API_URL}/admin/users-query?university=${values.university}`;
      } else if (values.searchQuerry && (!values.university || values.university === '')) {
          reqUrl = `${process.env.REACT_APP_API_URL}/admin/users-query?searchQuerry=${values.searchQuerry}`;
      } else if((!values.university || values.university === '') && (!values.searchQuerry || values.searchQuerry === '')) {
          reqUrl = `${process.env.REACT_APP_API_URL}/admin/users`
      }

      setStudentsDataLoading(true);
      const response = await axios.request({
        method: 'GET', 
        url: reqUrl, 
        withCredentials: true,
      });
      if(response.status === 200 || response.status === 201) {
        setStudentsData(response.data.students);
        setStudentsDataError(null);
        setFormError(null);
      }
    }
    catch(error) {
      setStudentsDataError(error.response.data.message);
    } finally {
      setStudentsDataLoading(false);
    }
  }    
  
  const deleteStudent = async (email) => {
    try {
        setStudentsDataLoading(true);
        const response = await axios.request({
            method: 'DELETE', 
            url: Object.keys(studentsData).length !== 0 &&  `${process.env.REACT_APP_API_URL}/admin/users/${email}`, 
            withCredentials: true,
        });
        if(response.status === 204) {
          setStudentsData(prevState => prevState.filter(el => el.email !== email));
          setStudentsDataError(null);
        }
    }
    catch(error) {
        setFormError(error.response.data.message);
    } finally {
      setStudentsDataLoading(false);
    }
  }

  const closePreviewModal = () => {
    return setPreviewModal({
      opened: false,
      data: null
    });
  }

  const closeEditModal = () => {
    return setEditModal({
      opened: false,
      data: null
    });
  }

  // FORM HANDLER
  const formik = useFormik({
      initialValues: {
        university: '',
        searchQuerry: '',
      },
      enableReinitialize: true,
      onSubmit,
      validationSchema: adminSearchSchema
  });

  return (
    <StyledStudents>
      <StyledStudentsHeading>
        <HeadingThree dark>Browse Students</HeadingThree>
        <Paragraph size="large" color="black">From this panel, you can query and manage all the users</Paragraph>
        {(formError || studentsDataError) && (
            <StyledMessageWrapper background>
                <StyledMessage>{formError || studentsDataError}</StyledMessage>
            </StyledMessageWrapper>
        )}   
        <StyledForm method="POST" onSubmit={formik.handleSubmit}>
          <CustomInput type="test" loading={studentsDataLoading} id="searchQuerry" name="searchQuerry" value={formik.values.searchQuerry} onChange={formik.handleChange} error={formik.errors.email} placeholder="Student first name, last name or email"/>
          <StyledFormGroup>
            <Label color="black" htmlFor="university">Student University</Label>
            {
              studentsDataLoading
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
                        <option value="Facultatea de ??tiin??a ??i Ingineria Materialelor" label="Facultatea de ??tiin??a ??i Ingineria Materialelor" />
                        <option value="Facultatea de Mecanic??" label="Facultatea de Mecanic?? Ia??i" />
                        <option value="Facultatea de Inginerie Electric??, Energetic?? ??i Informatic?? Aplicat??" label="Facultatea de Inginerie Electric??, Energetic?? ??i Informatic?? Aplicat??" />
                        <option value="Facultatea de Inginerie Chimic?? ??i Protec??ia Mediului ???Cristofor Simionescu???" label="Facultatea de Inginerie Chimic?? ??i Protec??ia Mediului ???Cristofor Simionescu???" />
                        <option value="Facultatea de Hidrotehnic??, Geodezie ??i Ingineria Mediului" label="Facultatea de Hidrotehnic??, Geodezie ??i Ingineria Mediului" />
                        <option value="Facultatea de Electronic??, Telecomunica??ii ??i Tehnologia Informa??iei" label="Facultatea de Electronic??, Telecomunica??ii ??i Tehnologia Informa??iei" />
                        <option value="Facultatea de Design Industrial ??i Managementul Afacerilor" label="Facultatea de Design Industrial ??i Managementul Afacerilor" />
                        <option value="Facultatea de Construc??ii ??i Instala??ii" label="Facultatea de Construc??ii ??i Instala??ii" />
                        <option value="Facultatea de Automatic?? ??i Calculatoare" label="Facultatea de Automatic?? ??i Calculatoare" />
                        <option value="Facultatea de Arhitectur?? ???G.M. Cantacuzino???" label="Facultatea de Arhitectur?? ???G.M. Cantacuzino???" />
                        <option value="Facultatea Construc??ii de Ma??ini ??i Management Industrial" label="Facultatea Construc??ii de Ma??ini ??i Management Industrial" />
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
          <Button type="submit" textLabel="Search users" />
        </StyledForm> 
      </StyledStudentsHeading>
      <StyledStudentsContent>
        {
          studentsDataLoading
            ? (
              <SkeletonWrapper>
                <Skeleton baseColor='rgba(124,111,99,.3)'/>
              </SkeletonWrapper>
            )
            : (
              <PaginatedItems 
                items={studentsData} 
                itemsPerPage={5} 
                deleteStudent={deleteStudent} 
                togglePreviewModal={setPreviewModal}
                toggleEditModal={setEditModal}  
              />
            ) 
        }
      </StyledStudentsContent>
      {
        previewModal.opened && previewModal.data && (
          <PreviewModal closeModal={closePreviewModal} studentData={previewModal.data}/>
        )
      }
      {
        editModal.opened && editModal.data && (
          <EditModal closeModal={closeEditModal} studentData={editModal.data}/>
        )
      }
    </StyledStudents>
  )
}

export default Students;