import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';

export const Dashboard = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <>
      <div>Navigation</div>
      {!isMobile && (
        <>
          <Balance />
          <div>Currency</div>
        </>
      )}
    </>
  );
};
