import { Backdrop, Content } from './ModalWindow.styled';

export const ModalWindowWraper = ({ children, clickOnBackdrop }) => {
  return (
    <Backdrop onClick={clickOnBackdrop}>
      <Content>{children}</Content>
    </Backdrop>
  );
};
