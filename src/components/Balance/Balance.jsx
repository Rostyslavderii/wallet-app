import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { Wrapper, Text, Amount } from './Balance.styled';

export const Balance = () => {
  const currentBalance = useSelector(selectBalance);
  return (
    <Wrapper>
      <Text>your balance</Text>
      <Amount>
        &#8372; <b>{currentBalance.toFixed(2)}</b>
      </Amount>
    </Wrapper>
  );
};
