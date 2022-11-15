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
    <Container>
      <Wrapper>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>

        <section>
          <Form onSubmit={handleSubmit}>
            <Label value={values.email} error={errors.email}>
              <IoMdMail />
              <Input
                type="text"
                name="email"
                value={values.email}
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              {values.email.length > 0 && (
                <div>
                  <span></span>
                  {errors.email && <p>{errors.email}</p>}
                </div>
              )}
            </Label>

            <Label
              value={values.password}
              error={errors.password}
              length={values.password.length}
            >
              <MdLock />
              <Input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {values.password.length > 0 && (
                <div>
                  <span></span>
                  {errors.password && <p>{errors.password}</p>}
                </div>
              )}
            </Label>

            <Label
              value={values.confirmPassword}
              error={errors.confirmPassword}
              length={values.confirmPassword.length}
            >
              <MdLock />
              <Input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
              {values.confirmPassword.length > 0 && (
                <div>
                  <span></span>
                  {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
              )}
            </Label>

            <Label value={values.username} error={errors.username}>
              <IoPersonSharp />
              <Input
                type="text"
                name="username"
                value={values.username}
                placeholder="First name"
                onChange={handleChange}
                required
              />
              {values.username.length > 0 && (
                <div>
                  <span></span>
                  {errors.username && <p>{errors.username}</p>}
                </div>
              )}
            </Label>
            <FormButton primary type="submit">
              Register
            </FormButton>
          </Form>

          <FormLink to="/login">Log in</FormLink>
        </section>
      </Wrapper>
    </Container>
  );
};
