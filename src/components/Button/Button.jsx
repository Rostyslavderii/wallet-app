import { StyledButton } from './Button.styled';

export const Button = ({
  children = 'default btn',
  onClick = () => {},
  type,
  ...attrs
}) => {
  return (
    <StyledButton type={type} onClick={onClick} {...attrs}>
      {children}
    </StyledButton>
  );
};
