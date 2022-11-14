import { Icon, StyledBtn } from './AddTransactionBtn.styled';

export const AddTransactionBtn = ({ onClick, ...attrs }) => {
  return (
    <StyledBtn onClick={onClick} {...attrs}>
      <Icon />
    </StyledBtn>
  );
};
