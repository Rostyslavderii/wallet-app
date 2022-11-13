import { StyledNavLink, StyledUl, StyledNav } from './Navigation.styled';
import { AiFillHome } from 'react-icons/ai';
import { MdTimeline } from 'react-icons/md';
import { useMedia } from 'react-use';
import { FaDollarSign } from 'react-icons/fa';

export const Navigation = () => {
  const isMob = useMedia('(max-width: 767px)');
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledNavLink to="/" aria-label="home">
            <AiFillHome /> {!isMob && 'Home'}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="statistic" aria-label="statistic">
            <MdTimeline /> {!isMob && 'Statistic'}
          </StyledNavLink>
        </li>
        {isMob && (
          <li>
            <StyledNavLink to="currency" aria-label="currency">
              <FaDollarSign />
            </StyledNavLink>
          </li>
        )}
      </StyledUl>
    </StyledNav>
  );
};
