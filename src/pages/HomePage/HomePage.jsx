import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/transactions/transactionOperation';
import {
  selectCategories,
  selectTransaction,
} from 'redux/transactions/transactionSelectors';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';

const HomePage = () => {
  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <TransactionTable transactions={transactions} categories={categories} />
  );
};

export default HomePage;
