import { useSelector } from 'react-redux';
import { selectTransaction } from 'redux/transactions/transactionSelectors';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';
import { AddTransactionBtn } from 'components/AddTransaction/AddTransactionBtn';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isMobile = useMedia('(max-width: 767px)');
  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);

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
      {modalIsOpen && <ModalAddTransaction onClose={onClose} />}
    </>
  );
};

export default HomePage;
