import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const checkButtonColor = p => {
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
    return -4;
  } else {
    return 47;
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
  transition: all 0.5s;
  scale: 1;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 10px ${checkButtonColor};
    transition: all 0.5s;
    cursor: pointer;
    scale: 1.05;
  }
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

export const Error = styled.div`
  position: absolute;
  max-width: 190px;

  margin: 0;

  font-size: 15px;
  line-height: calc(27 / 18);
  color: ${p => p.theme.colors.btPink};
`;

export const customStylesSelect = isMobile => ({
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    width: isMobile ? '280px' : '394px',
    height: '32px',
    border: '1px solid transparent',
    borderRadius: '0',
    borderBottom: '1px solid #E0E0E0',

    color: '#e0e0e0',
    fontFamily: 'Exo,  sans-serif',
    fontWeight: `400`,
    fontSize: `18`,
    lineHeight: 1.5,
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',

    paddingLeft: '8px',
    paddingRight: '8px',

    ':active': {
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
    },
    ':hover': {
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
    },
    ':focus': {
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: '32px',
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? data.color
      : isFocused
      ? 'rgba(255, 255, 255, 0.5)'
      : undefined,

    color: isDisabled
      ? '#ccc'
      : isSelected
      ? '#ff6596'
      : isFocused
      ? '#ff6596'
      : undefined,

    cursor: isDisabled ? 'not-allowed' : 'default',

    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled
        ? isSelected
          ? data.color
          : 'rgba(255, 255, 255, 0.5)'
        : undefined,
    },
    ':hover': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
    ':focus': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
  }),
  menu: styles => ({
    ...styles,
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    height: '325px',
    zIndex: '1000000',
  }),
  menuList: styles => ({
    ...styles,
    overflow: 'visible',
  }),
});

export const DivSumm = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Amount = styled.input`
  padding-left: 8px;
  padding-right: 8px;
  width: 190px;
  height: 32px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  text-align: center;
  &:active,
  &:hover,
  &:focus {
    outline: 1px solid #e0e0e0;
    border-radius: 6px;
  }

  &::placeholder {
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    text-align: center;
    &::placeholder {
      text-align: left;
    }
  }
`;

export const DateInput = styled.div`
  width: 181px;
  height: 32px;
  border: 0;

  position: relative;

  svg {
    position: relative;
    top: 25%;
    left: 90%;
    fill: #000;
  }
  &:focus svg {
    fill: blue;
  }
  &:hover svg {
    fill: blue;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const Comment = styled.textarea`
  padding-left: 8px;
  padding-right: 8px;

  width: 394px;
  height: 32px;
  border: 0;
  border-bottom: ${p => p.theme.borderColor.comment};

  resize: none;

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  &:active,
  &:hover,
  &:focus {
    outline: 1px solid #e0e0e0;
    border-radius: 6px;
  }

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

export const Datalist = styled.datalist`
  background-color: red;
  color: red;
  font-size: 80px;
`;
