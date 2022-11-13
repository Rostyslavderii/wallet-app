import { Button } from 'components/Button/Button';
import { useState } from 'react';

const {
  ModalWindowWraper,
} = require('components/ModalWindowWraper/ModalWindowWraper');

export const LogoutForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <ModalWindowWraper clickOnBackdrop={() => setIsOpen(false)}>
          logout
          <Button primary></Button>
          <Button></Button>
        </ModalWindowWraper>
      )}
    </>
  );
};
