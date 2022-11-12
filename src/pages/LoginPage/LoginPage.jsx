import { useMedia } from 'react-use';
import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { Page } from 'components/Forms/Forms.styled';

const LoginPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <Page>
      {!isMobile && <h1>Finance App</h1>}
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
