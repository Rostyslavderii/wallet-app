import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectTransaction } from 'redux/transactions/transactionSelectors';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isMobile = useMedia('(max-width: 768px)');
  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isMobile && <Balance />}
      <TransactionTable transactions={transactions} categories={categories} />
      <button
        type="button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        add transaction
      </button>
      {modalIsOpen && <ModalAddTransaction onClose={onClose} />}
    </>
  );
};

export default HomePage;
