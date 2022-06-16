// FORM LIBRARY
import * as yup from 'yup';

// STUDENT ENROLLMENT SCHEMA
export const enrollSchema = yup.object({
    university: yup.string().required("You must select your university"),
    type_of_study: yup.string().required("You must select your type of study"),
    year_of_study: yup.number().required("You must select your year of study"),
    grade: yup.number().required("You must enter your previous year grade"),
    financial_type: yup.string().required("You must enter your financial type"),
    nationality: yup.string().required("You must enter your nationality"),
    student_gender: yup.string().required("You must enter select your gender")
}); 
