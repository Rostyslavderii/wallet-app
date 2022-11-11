import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectTransaction } from 'redux/transactions/transactionSelectors';
import { selectCategories } from 'redux/categories/categoriesSelectors';
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
