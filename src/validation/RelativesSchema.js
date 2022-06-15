// FORM LIBRARY
import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Create or update relatives information schema
export const createRelativesSchema = yup.object({
    first_name: yup.string().required("You must enter your first name").min(3, "First name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter your last name").min(3, "Last name should contain al least 3 characters"),
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress of your kin"),
    relation: yup.string().required("You must enter your relation with relative").min(3, "Your relation should contain al least 3 characters"),
    adress: yup.string().required("You must enter your a adress"),
    phone_number: yup.string().required("You must enter a phone number").matches(phoneRegExp, "Phone number is not valid")
}); 