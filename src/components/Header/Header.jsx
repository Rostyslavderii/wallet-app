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

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <Head>
      <Container>
        <DivHeader>
          <Logo />
          <DivHeaderUser>
            <SpanNameHeader>{name}</SpanNameHeader>
            <LogOutButton
              onClick={() => {
                dispatch(logout());
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
