import styled from 'styled-components';
import { switchColor } from 'helpers/transformDate';

export const Category = styled.p`
  color: ${switchColor};
  font-size: 18px;
  font-weight: 700;
`;

export const Comment = styled.textarea`
  resize: none;
  width: 394px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: ${p => p.theme.colors.bgGray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.btBlue};
    border-radius: 2px;
  }
  &:focus {
    outline: 1px solid ${p => p.theme.colors.btBlue};
    border-radius: 10px;
    height: 100px;
  }
`;
