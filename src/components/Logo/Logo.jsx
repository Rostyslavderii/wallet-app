import logoIcon from '../../images/header/Wallet.svg';
import { LogoLink, LogoImg } from './logo.styled';
// import { useMedia } from 'react-use';

export const Logo = () => {
  // const isMobile = useMedia('(max-width: 767px)');

  return (
    <LogoLink to="/">
      <LogoImg src={logoIcon} alt="Wallet" />
      Wallet
    </LogoLink>
  );
};
