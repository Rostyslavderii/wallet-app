import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';

export const Balance = () => {
  const currentBalance = useSelector(selectBalance);
  return <div>Balance: {currentBalance}</div>;
};
