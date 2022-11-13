import { useMedia } from 'react-use';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { CustomizedLoginPage, Title } from 'components/Forms/Forms.styled';

const LoginPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <CustomizedLoginPage>
      {!isMobile && <Title>Finance App</Title>}
      <LoginForm />
    </CustomizedLoginPage>
  );
};

export default LoginPage;
