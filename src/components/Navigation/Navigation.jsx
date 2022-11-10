import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="statistic">Statistic</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};
