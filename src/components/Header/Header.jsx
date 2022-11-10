import { IoLogOutOutline } from 'react-icons/io5';
import { Logo } from 'components/Logo/Logo';
import {
  DivHeader,
  SpanNameHeader,
  DivHeaderUser,
  LogOutButton,
} from './Header.styled';
import { useMedia } from 'react-use';
import { logout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');
  // const isTablet = useMedia('(max-width: 1279px)');
  const dispatch = useDispatch();
  return (
    <DivHeader>
      <Logo />
      <DivHeaderUser>
        {!isMobile ? <SpanNameHeader>Name</SpanNameHeader> : <span>Name</span>}
        <LogOutButton
          onClick={() => {
            dispatch(logout());
          }}
        >
          <IoLogOutOutline /> {!isMobile && <>Exit</>}
        </LogOutButton>
      </DivHeaderUser>
    </DivHeader>
  );
};
