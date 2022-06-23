// FORM LIBRARY
import * as yup from 'yup';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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

export const studentUpdateProfileSchema = yup.object({
    first_name: yup.string().required("You must enter your first name").min(3, "Your first name should contain al least 3 characters"),
    last_name: yup.string().required("You must enter your last name").min(3, "Your last name should contain al least 3 characters"),
    email: yup.string().required("You must enter your e-mail adress").email("Please enter a valid e-mail adress"),
});

// UPDATE PASSWORD SCHEMA
export const updatePasswordSchema = yup.object({
    password_confirm: yup.string().required("You must enter a password").matches(passwordRegex, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_new: yup.string().required("You must enter a password").matches(passwordRegex, "Your password must contain: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    password_new_confirm: yup.string().required("You must enter a password confirm").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password_new")], "Your confirm password does not match, please try again")
    })
});