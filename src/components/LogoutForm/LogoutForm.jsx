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
        </ModalWindowWraper>
      )}
    </>
  );
};
