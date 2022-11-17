import { Button } from 'components/Button/Button';
import { ModalTitle } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { Wrapper, Backdrop } from './Logout.styled';

export const LogoutForm = ({ closeModalFunc }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closeModal = e => {
      if (e.key === 'Escape') {
        closeModalFunc();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModalFunc]);
  return (
    <>
      <Backdrop>
        <Wrapper>
          <ModalTitle>Are you sure want to exit?</ModalTitle>
          <Button
            primary
            onClick={() => {
              dispatch(logout());
            }}
          >
            Yes, am sure
          </Button>
          <Button onClick={closeModalFunc}>No, I forgot something</Button>
        </Wrapper>
      </Backdrop>
    </>
  );
};
