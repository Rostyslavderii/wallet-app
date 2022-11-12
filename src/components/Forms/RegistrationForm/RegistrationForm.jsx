import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/authOperations';
import { Logo } from 'components/Logo/Logo';
import { Form, Input } from '../Forms.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string('Please, enter your e-mail')
      .email('Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string('Please, enter your password')
      .min(6, 'Password must contain at least 6 symbols')
      .max(12, 'Password must contain no more than 12 symbols')
      .required('Password is required'),
    confirmPassword: yup
      .string('Please, confirm your password')
      .oneOf(
        [yup.ref('password')],
        'Entered password doesn`t match the previous one'
      )
      .required('Password is required'),
    username: yup
      .string('Please, enter your name')
      .min(1, 'Name must contain at least 1 symbol')
      .max(12, 'Name must contain no more than 12 symbols')
      .required('Name is required'),
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
    validationSchema,
    onSubmit: ({ username, email, password }) => {
      dispatch(register({ username, email, password }));
      resetForm();
    },
  });

  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <label>
          E-mail
          <Input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div>{errors.email}</div>}
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div>{errors.password}</div>}
        </label>
        <label>
          Confirm password
          <Input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
        </label>
        <label>
          First name
          <Input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
          {errors.username && <div>{errors.username}</div>}
        </label>

        <button type="submit">Register</button>
      </Form>

      <Link to="/login">Log in</Link>
    </>
  );
};
