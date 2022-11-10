import { StyledNavLink } from 'components/StyledNavLink/StyledNavLink';
import { AiFillHome } from 'react-icons/ai';
import { MdTimeline } from 'react-icons/md';
import { useMedia } from 'react-use';
import { FaDollarSign } from 'react-icons/fa';

export const Navigation = () => {
  const isMob = useMedia('(max-width: 768px)');
  return (
    <nav>
      <ul>
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
            <StyledNavLink to="statistic" icon={<FaDollarSign />}>
              Currency
            </StyledNavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
