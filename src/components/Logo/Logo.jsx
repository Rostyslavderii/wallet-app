import logoIcon from '../../images/header/Wallet.svg';
import { LogoLink } from './logo.styled';

export const Logo = () => {
  return (
    <LogoLink to="/">
      <img width="40px" height="40px" src={logoIcon} alt="Logo Icon" />
      <span>Wallet</span>
    </LogoLink>
  );
};
