import styled from 'styled-components';
import { switchColor } from 'helpers/transformDate';

export const Category = styled.p`
  color: ${switchColor};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const TransactionData = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Comment = styled.textarea`
  resize: none;
  width: 280px;
  border: 0;
  @media screen and (min-width: 768px) {
    width: 394px;
  }

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;
  outline: ${p => p.theme.borderColor.comment};
  outline-offset: 2px;
  border-radius: 2px;
  transition: outline-color ${p => p.theme.transition};
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: ${p => p.theme.colors.bgGray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.lBlue};
    border-radius: 2px;
  }
  &:focus {
    outline-color: ${p => p.theme.colors.lBlue};
  }
`;
