import { IoLogOutOutline } from 'react-icons/io5';
import { Logo } from 'components/Logo/Logo';
import { DivHeader, SpanName } from './Header.styled';

export const Header = () => {
  return (
    <DivHeader>
      <Logo />
      <div>
        <SpanName>"name"</SpanName>
        <button
          type="button"
          onClick={() => {
            alert('Need logout fetch');
          }}
        >
          <IoLogOutOutline /> Exit
        </button>
      </div>
    </DivHeader>
  );
};
