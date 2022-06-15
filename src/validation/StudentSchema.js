// FORM LIBRARY
import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Create or update student information schema
export const studentInformationSchema = yup.object({
    username: yup.string().required("You must enter your username").min(3, "Your username should contain al least 3 characters"),
    dob: yup.date().required("You must enter your date of birth"),
    gender: yup.string().required("You must select your gender"),
    nationality: yup.string().required("You must enter your nationality"),
    phone_number: yup.string().required("You must enter your phone number").matches(phoneRegExp, "Your phone number is not valid"),
    street_adress: yup.string().required("You must enter your adress"),
    city: yup.string().required("You must enter your city"),
    state: yup.string().required("You must enter your state or province"),
    country: yup.string().required("You must enter your country"),
    zip_code: yup.string().required("You must enter your zip_code")
});