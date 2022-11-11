import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { Wrapper } from './Balance.styled';

export const Balance = () => {
  const currentBalance = useSelector(selectBalance);
  return (
    <Wrapper>
      <p>your balance</p>
      <p>&#8372;{currentBalance.toFixed(2)}</p>
    </Wrapper>
  );
};
