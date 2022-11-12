import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick = () => {}, type, ...attrs }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...attrs}>
      {children || 'default btn'}
    </StyledButton>
  );
};
