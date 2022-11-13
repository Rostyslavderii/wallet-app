import { Backdrop, Content } from './ModalWindow.styled';

export const ModalWindowWraper = ({ children, clickOnBackdrop }) => {
  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      clickOnBackdrop();
    }
  };

  return (
    <Backdrop onClick={handleClick}>
      <Content>{children}</Content>
    </Backdrop>
  );
};
