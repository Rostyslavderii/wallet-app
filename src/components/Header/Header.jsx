import { IoLogOutOutline } from 'react-icons/io5';
import { Logo } from 'components/Logo/Logo';
import {
  DivHeader,
  SpanNameHeader,
  DivHeaderUser,
  LogOutButton,
} from './Header.styled';
import { useMedia } from 'react-use';

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(max-width: 1279px)');
  return (
    <DivHeader>
      <Logo />
      <DivHeaderUser>
        {!isMobile ? <SpanNameHeader>Name</SpanNameHeader> : <span>Name</span>}
        <LogOutButton
          type="button"
          onClick={() => {
            alert('Need logout fetch');
          }}
        >
          <IoLogOutOutline /> {!isMobile && <>Exit</>}
        </LogOutButton>
      </DivHeaderUser>
    </DivHeader>
  );
};
