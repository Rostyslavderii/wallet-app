import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/authOperations';
import { Container } from 'utils/GlobalStyle';
import { Logo } from 'components/Logo/Logo';
import {
  Form,
  FormButton,
  FormLink,
  HeaderLogo,
  Input,
  Label,
  Wrapper,
} from '../Forms.styled';
import { IoMdMail } from 'react-icons/io';
import { MdLock } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';

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

  const { handleSubmit, values, handleChange, errors, touched, resetForm } =
    useFormik({
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
    <Container>
      <Wrapper>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>

        <section>
          <Form onSubmit={handleSubmit}>
            <Label>
              <IoMdMail />
              <Input
                type="text"
                name="email"
                value={values.email}
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              {touched.email && errors.email && (
                <div>
                  <span></span>
                  <p>{errors.email}</p>
                </div>
              )}
            </Label>

            <Label value={values.password.length}>
              <MdLock />
              <Input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {touched.password && (
                <div>
                  <span></span>
                  {errors.password && <p>{errors.password}</p>}
                </div>
              )}
            </Label>

            <Label>
              <MdLock />
              <Input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
              {touched.confirmPassword && (
                <div>
                  <span></span>
                  {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
              )}
            </Label>

            <Label>
              <IoPersonSharp />
              <Input
                type="text"
                name="username"
                value={values.username}
                placeholder="First name"
                onChange={handleChange}
                required
              />
              {touched.username && errors.username && (
                <div>
                  <span></span>
                  <p>{errors.username}</p>
                </div>
              )}
            </Label>

            <FormButton type="submit">Register</FormButton>
          </Form>

          <FormLink to="/login">Log in</FormLink>
        </section>
      </Wrapper>
    </Container>
  );
};
