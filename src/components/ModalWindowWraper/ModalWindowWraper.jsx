import { useCallback } from 'react';
import { useEffect } from 'react';
import { Backdrop, Content } from './ModalWindow.styled';

export const ModalWindowWraper = ({ children, clickOnBackdrop }) => {
  document.body.style.overflow = 'hidden';
  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      document.body.style.overflow = 'scroll';
      clickOnBackdrop();
    }
  };
  const handleKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        document.body.style.overflow = 'scroll';
        clickOnBackdrop();
      }
    },
    [clickOnBackdrop]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <Backdrop onClick={handleClick}>
      <Content>{children}</Content>
    </Backdrop>
  );
};
