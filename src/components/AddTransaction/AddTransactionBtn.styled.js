import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Icon = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #fff;

  transition: all 0.5s ease-in-out;
`;

export const StyledBtn = styled.button`
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

  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
  @media (max-width: 1280px) {
    position: sticky;
    left: 100vw;
    bottom: 20px;
  }
  &:hover,
  &:focus {
    transform: scale(1.3);
    & svg {
      transform: scale(1.3);
    }
  }
`;
