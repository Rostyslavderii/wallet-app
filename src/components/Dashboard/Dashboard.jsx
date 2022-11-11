import { Navigation } from 'components/Navigation/Navigation';
import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { FlexWrap, Wrap } from './Dashboard.styled';

export const Dashboard = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <FlexWrap>
      <Wrap>
        <Navigation />
        {!isMobile && <Balance />}
      </Wrap>
      {!isMobile && <Currency />}
    </FlexWrap>
  );
};
