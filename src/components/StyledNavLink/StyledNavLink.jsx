import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useMedia } from 'react-use';

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 23px;

  text-decoration: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;

  @media (max-width: 768px) {
    height: 38px;
    width: 38px;
  }
  & svg {
    display: block;
    width: 12px;
    height: 12px;
    padding: 3px;
    border-radius: 2px;

    background: #4a56e2;

    @media (max-width: 768px) {
      height: 24px;
      width: 24px;
      padding: 6px;
      border-radius: 6px;
    }
    fill: #fff;
  }
  &.active {
    font-weight: 700;
    & svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;
const Link = ({ to, children, icon }) => {
  const isWide = useMedia('(min-width: 768px)');
  return (
    <StyledLink to={to}>
      <div>{icon}</div>

      {isWide && <div>{children}</div>}
    </StyledLink>
  );
};

export const StyledNavLink = styled(Link)`
  width: 300px;
`;
