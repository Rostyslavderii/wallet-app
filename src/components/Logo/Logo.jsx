import logoIcon from '../../images/header/Wallet.svg';
import { LogoLink, LogoImg } from './logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoImg src={logoIcon} alt="Wallet" />
      Wallet
    </LogoLink>
  );
};
