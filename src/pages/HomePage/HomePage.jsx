import { useSelector } from 'react-redux';
import { selectTransaction } from 'redux/transactions/transactionSelectors';

const HomePage = () => {
  const transactions = useSelector(selectTransaction);
  console.log(transactions);
  return <div>Home page</div>;
};

export default HomePage;
