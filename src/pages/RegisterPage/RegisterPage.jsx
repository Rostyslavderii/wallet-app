import { useMedia } from 'react-use';
import { RegistrationForm } from 'components/Forms/RegistrationForm/RegistrationForm';
import { CustomizedRegisterPage, Title } from 'components/Forms/Forms.styled';

const RegisterPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <CustomizedRegisterPage>
      {!isMobile && <Title>Finance App</Title>}
      <RegistrationForm />
    </CustomizedRegisterPage>
  );
};

export default RegisterPage;
