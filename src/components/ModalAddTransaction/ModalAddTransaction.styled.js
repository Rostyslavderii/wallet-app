import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const checkButtonColor = (p) => {
  let backgroundColor;
  if (!p.props) {
    backgroundColor = p.theme.colors.btGreen;
  } else {
    backgroundColor = p.theme.colors.btPink;
  }
  return backgroundColor;
};
const checkButtonPosition = p => {
  if (!p.props) {
    return 0;
  } else {
    return 50;
  }
};

export const ModalTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 0;
  height: 40px;

  text-align: center;
  margin-bottom: 40px;
  font-family: ${p => p.theme.ff.familyPoppins};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs30};
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    font-size: ${p => p.theme.fontSize.fs24};
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const TypeLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const InputCheckBox = styled.input`
  appearance: none;
  position: absolute;
`;

export const CheckBox = styled.div`
  position: relative;

  width: 80px;
  height: 40px;
  border: ${p => p.theme.borderColor.comment};
  border-radius: 30px;

  display: flex;
  align-items: center;
`;

export const Plus = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.white};
`;
export const Minus = styled(AiOutlineMinus)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.white};
`;

export const CheckButton = styled.div`
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  position: absolute;
  left: ${checkButtonPosition}%;
  background-color: ${checkButtonColor};
  box-shadow: 0px 3px 10px ${checkButtonColor};
`;

export const Span = styled.span`
  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw7};
  font-size: ${p => p.theme.fontSize.fs16};
  line-height: 1.5;

  color: #e0e0e0;
`;

export const SpanIncome = styled.span`
  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw7};
  font-size: ${p => p.theme.fontSize.fs16};
  line-height: 1.5;
  color: ${p => p.theme.colors.btGreen};
`;
export const SpanExpense = styled.span`
  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw7};
  font-size: ${p => p.theme.fontSize.fs16};
  line-height: 1.5;
  color: ${p => p.theme.colors.btPink};
`;

export const SelectCategory = styled.select`
  width: 394px;
  height: 32px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  color: #e0e0e0;
  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const OptionCategory = styled.option`
  color: ${p => p.theme.colors.black};
`;

export const DivSumm = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Amount = styled.input`
  width: 190px;
  height: 32px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const DateInput = styled.div`
  width: 181px;
  height: 32px;
  border: 0;

  position: relative;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const Calendar = styled.span`
  position: absolute;
  top: 25%;
  right: 0;
`;

export const Comment = styled.textarea`
  width: 394px;
  height: 32px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  resize: none;

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

   @media screen and (max-width: 767px) {
    width: 280px;
    height: 84px;
  }
`;

export const ButtonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;

  background-color: transparent;
  border: 0;

  font-size: 16px;
`;

export const ADDButton = styled.button`
  width: 300px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  letter-spacing: 0.1em;

  background-color: ${p => p.theme.colors.btGreen};

  color: ${p => p.theme.colors.white};

  &:hover,
  &:focus {
    scale: 1.01;
    box-shadow: 0px 3px 10px ${p => p.theme.colors.btGreen};
  }
`;
