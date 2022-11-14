import { IoLogOutOutline } from 'react-icons/io5';
import { Logo } from 'components/Logo/Logo';
import {
  Head,
  DivHeader,
  SpanNameHeader,
  DivHeaderUser,
  LogOutButton,
} from './Header.styled';
import { useMedia } from 'react-use';
import { logout } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'utils/GlobalStyle';
import { selectName } from 'redux/auth/authSelectors';
import { useState } from 'react';
import { LogoutForm } from 'components/LogoutForm/LogoutForm';

export const Header = () => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const isMobile = useMedia('(max-width: 767px)');
  const name = useSelector(selectName);

  return (
    <Head>
      <Container>
        <DivHeader>
          <Logo />
          <DivHeaderUser>
            <SpanNameHeader>{name}</SpanNameHeader>
            {isOpenLogoutModal && (
              <LogoutForm closeModalFunc={() => setIsOpenLogoutModal(false)} />
            )}
            <LogOutButton
              onClick={() => {
                setIsOpenLogoutModal(true);
              }}
            >
              <IoLogOutOutline /> {!isMobile && 'Exit'}
            </LogOutButton>
          </DivHeaderUser>
        </DivHeader>
      </Container>
    </Head>
  );
};
