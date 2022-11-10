import { Navigation } from 'components/Navigation/Navigation';
import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';

export const Dashboard = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <>
      <Navigation />
      {!isMobile && (
        <>
          <Balance />
          <Currency />
        </>
      )}
    </>
  );
};
