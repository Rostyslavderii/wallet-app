import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Icon = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #fff;
`;

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 44px;
  height: 44px;

  background: #24cca7;

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const AddTransactionBtn = ({ onClick, ...attrs }) => {
  return (
    <StyledBtn onClick={onClick} {...attrs}>
      <Icon />
    </StyledBtn>
  );
};
