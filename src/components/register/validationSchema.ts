import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string()
        .min(6)
        .required("Password is required"),
    passwordConfirmation: Yup.string()
        .required("Password Confirmation is required")
        .oneOf([Yup.ref('password')], 'Passwords must match')
});