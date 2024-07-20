import * as yup from 'yup';
import { passwordRegex } from '@/lib/regex';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const signUpSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username cannot exceed 20 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      passwordRegex,
      'Password must include an uppercase letter, a lowercase letter, a number, and a special character'
    ),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Please confirm your password'),
});

export const createStudySessionSchema = yup.object({
  subject: yup.string().required('Subject is required'),
  date: yup.string().required('Date is required'),
  durationMinutes: yup
    .number()
    .required('Duration is required')
    .typeError('Duration must be a number')
    .positive('Duration must be a positive number')
    .integer('Duration must be an integer'),
});

export const createBreakSchema = yup.object({
  date: yup.string().required('Date is required'),
  durationMinutes: yup
    .number()
    .required('Duration is required')
    .typeError('Duration must be a number')
    .positive('Duration must be a positive number')
    .integer('Duration must be an integer'),
});

export const createPredictionSchema = yup.object({
  subject: yup.string().required('Subject is required'),
});
