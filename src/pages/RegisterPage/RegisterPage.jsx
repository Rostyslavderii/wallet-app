import { useMedia } from 'react-use';
import { RegistrationForm } from 'components/Forms/RegistrationForm/RegistrationForm';
import { Page } from 'components/Forms/Forms.styled';

const RegisterPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <Page>
      {!isMobile && <h1>Finance App</h1>}
      <RegistrationForm />
    </Page>
  );
};

export default RegisterPage;
