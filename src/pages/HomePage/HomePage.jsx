import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/transactions/transactionOperation';
import {
  selectCategories,
  selectTransaction,
} from 'redux/transactions/transactionSelectors';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { AddTransactionBtn } from 'components/AddTransaction/AddTransactionBtn';
import { useState } from 'react';

const HomePage = () => {
  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      {isModalAddTransactionOpen && 'ModalAddTransactionOpen'}
      <TransactionTable transactions={transactions} categories={categories} />
      <AddTransactionBtn
        onClick={() => setIsModalAddTransactionOpen(!isModalAddTransactionOpen)}
      />
    </>
  );
};

export default HomePage;
