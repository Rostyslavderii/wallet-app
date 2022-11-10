import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
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
    name: yup
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
      name: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
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
          <input
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
          <input
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
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div>{errors.name}</div>}
        </label>

        <button type="submit">Register</button>
      </form>

      <Link to="/login">Log in</Link>
    </>
  );
};
