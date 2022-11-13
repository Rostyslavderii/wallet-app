import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.black};

  svg {
    display: block;
    height: 38px;
    width: 38px;
    padding: 8px;
    border-radius: 6px;

    background-color: ${p => p.theme.colors.btBlue};
    fill: ${p => p.theme.colors.white};

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
      padding: 3px;
      border-radius: 2px;
    }
  }
  &.active {
    font-weight: 700;
    & svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: ${p => p.theme.colors.lBlue};
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 17px;
  }
  @media screen and (max-width: 767px) {
    /* position: fixed; */
    width: 200px;
    margin: 0 auto;
  }
`;

export const StyledNav = styled.nav`
  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: ${p => p.theme.colors.bgGray};
    left: 0;
    right: 0;
    z-index: 5;
  }
`;
