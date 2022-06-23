import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { adminSearchSchema } from '../../../validation/AdminSchema';
import axios from 'axios';
import { HeadingThree, Label, Paragraph } from '../../../utils/typography';
import PaginatedItems from '../../PaginatedItems/PaginatedItems';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../../layout/button/Button';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledStudents, StyledStudentsHeading, StyledForm, StyledFormGroup, SkeletonWrapper, StyledInputWrapper, StyledSelect, StyledMessageWrapper, StyledMessage, StyledStudentsContent } from './Students.style';

function Students() {
  // State
  const [ studentsData, setStudentsData ] = useState([]);
  const [ studentsDataError, setStudentsDataError ] = useState(null);
  const [ studentsDataLoading, setStudentsDataLoading ] = useState(true);
  const [ formError, setFormError ] = useState('');
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
          reqUrl = '${process.env.REACT_APP_API_URL}/admin/users'
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
  
  // const deleteStudent = async (id) => {
  //   try {
  //       setEnrollmentLoading(true);
  //       const response = await axios.request({
  //           method: 'DELETE', 
  //           url: Object.keys(enrollmenteData).length !== 0 &&  `${process.env.REACT_APP_API_URL}/user/enrollment/${enrollmenteData.id}`, 
  //           withCredentials: true,
  //       });
  //       if(response.status === 204) {
  //           setEnrollmentData({});
  //           setEnrollmentError(null);
  //       }
  //   }
  //   catch(error) {
  //       setFormError(error.response.data.message);
  //   } finally {
  //       setEnrollmentLoading(false);
  //   }
  // }

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

  console.log(studentsData, studentsDataError);

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
              <p>data</p>
            ) 
        }
      </StyledStudentsContent>
    </StyledStudents>
  )
}

export default Students;