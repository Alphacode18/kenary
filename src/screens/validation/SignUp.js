import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Please enter your full name')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
