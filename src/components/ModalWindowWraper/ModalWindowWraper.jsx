import { useCallback } from 'react';
import { useEffect } from 'react';
import { Backdrop, Content } from './ModalWindow.styled';

export const ModalWindowWraper = ({ children, clickOnBackdrop }) => {
  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      clickOnBackdrop();
    }
  };
  const handleKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        clickOnBackdrop();
      }
    },
    [clickOnBackdrop]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'auto';
    };
  }, [handleKey]);

  return (
    <Backdrop onClick={handleClick}>
      <Content>{children}</Content>
    </Backdrop>
  );
};
