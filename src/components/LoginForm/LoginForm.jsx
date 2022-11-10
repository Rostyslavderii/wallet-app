import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string('Please, enter your e-mail')
      .email('Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string('Please, enter your password')
      .min(6, 'Password must consist of at least 6 symbols')
      .max(12, 'Password must contain no more than 12 symbols')
      .required('Password is required'),
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(login(values));
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

        <button type="submit">Log in</button>
      </form>

      <Link to="/register">Register</Link>
    </>
  );
};
