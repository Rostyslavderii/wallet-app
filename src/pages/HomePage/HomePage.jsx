import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectTransaction,
} from 'redux/transactions/transactionSelectors';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { Balance } from 'components/Balance/Balance';
import { AddTransactionBtn } from 'components/AddTransaction/AddTransactionBtn';
import { ModalWindowWraper } from 'components/ModalWindowWraper/ModalWindowWraper';
import { EditModal } from 'components/EditModal/EditModal';
import { Wrapper } from './HomePage.styled';
import { NoTableImg } from 'components/NoTable/NoTable';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const isMobile = useMedia('(max-width: 767px)');
  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);
  const isFetchingTransaction = useSelector(selectIsLoading);

  const closeEditModal = () => {
    setTransactionToEdit(null);
  };
  const openEditModal = transaction => {
    setTransactionToEdit(transaction);
  };
  const onClose = () => {
    setModalIsOpen(false);
    setTransactionToEdit(null);
  };

  return (
    <Wrapper>
      {isMobile && <Balance />}
      {transactions.length > 0 ? (
        <>
          <TransactionTable
            transactions={transactions}
            categories={categories}
            openEditModal={openEditModal}
          />
          <AddTransactionBtn type="button" onClick={openModal}>
            add transaction
          </AddTransactionBtn>
        </>
      ) : (
        !isFetchingTransaction && <NoTableImg openModal={openModal} />
      )}

      {(modalIsOpen || transactionToEdit) && (
        <ModalWindowWraper clickOnBackdrop={onClose}>
          {modalIsOpen ? (
            <ModalAddTransaction onClose={onClose} />
          ) : (
            <EditModal transaction={transactionToEdit} close={closeEditModal} />
          )}
        </ModalWindowWraper>
      )}
    </Wrapper>
  );
};

export default HomePage;
