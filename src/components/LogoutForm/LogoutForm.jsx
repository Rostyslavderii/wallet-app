import { Button } from 'components/Button/Button';
import { ModalTitle } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { Wraper } from './Logout.styled';

const {
  ModalWindowWraper,
} = require('components/ModalWindowWraper/ModalWindowWraper');

export const LogoutForm = ({ closeModalFunc }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ModalWindowWraper clickOnBackdrop={closeModalFunc}>
        <Wraper>
          <ModalTitle>Are you sure want to exit</ModalTitle>
          <Button
            primary
            onClick={() => {
              dispatch(logout());
            }}
          >
            Yes, am sure
          </Button>
          <Button onClick={closeModalFunc}>No, I forgot something</Button>
        </Wraper>
      </ModalWindowWraper>
    </>
  );
};
