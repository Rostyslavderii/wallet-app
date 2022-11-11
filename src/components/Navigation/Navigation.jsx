import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import { AiFillHome } from 'react-icons/ai';
import { MdTimeline } from 'react-icons/md';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { FaDollarSign } from 'react-icons/fa';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
    gap: 35px;
  }
`;

export const Navigation = () => {
  const isMob = useMedia('(max-width: 767px)');
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledNavLink to="/" icon={<AiFillHome />}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="statistic" icon={<MdTimeline />}>
            Statistic
          </StyledNavLink>
        </li>
        {isMob && (
          <li>
            <StyledNavLink to="currency" icon={<FaDollarSign />}>
              Currency
            </StyledNavLink>
          </li>
        )}
      </StyledUl>
    </nav>
  );
};
