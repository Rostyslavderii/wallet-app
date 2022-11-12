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
import { AddTransactionBtn } from 'components/AddTransaction/AddTransactionBtn';
import { ModalWindowWraper } from 'components/ModalWindowWraper/ModalWindowWraper';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isMobile = useMedia('(max-width: 767px)');
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
      <AddTransactionBtn
        type="button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        add transaction
      </AddTransactionBtn>
      {modalIsOpen && (
        <ModalWindowWraper clickOnBackdrop={onClose}>
          <ModalAddTransaction onClose={onClose} />
        </ModalWindowWraper>
      )}
    </>
  );
};

export default HomePage;
