import styled from 'styled-components';
import { switchBgStatistic } from 'helpers/switchBgStatistic';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: visible scroll;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 46px;
    margin-right: 0;
    max-width: 715px;
    max-height: 50vh;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.bgGrayRight};
    border-radius: 2px;
  }
`;

export const NoDataField = styled.div`
  overflow: hidden;
`;

export const TextMessage = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: ${p => (p.firtsTime ? '14px' : '13.5px')};
  @media screen and (min-width: 768px) {
    font-size: ${p => (p.firtsTime ? '16px' : '15px')};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${p => (p.firtsTime ? '19px' : '17px')};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${p => p.theme.ff.familyExo};
  color: ${p => p.theme.colors.black};
  text-align: center;
`;

export const TableHeading = styled.th`
  &:first-child {
    border-radius: 30px 0 0 30px;
  }
  &:last-child {
    border-radius: 0 30px 30px 0;
  }
  border: none;
  background-color: ${p => p.theme.colors.white};
  text-align: ${p => (p.left ? 'left' : 'right')};
  padding: ${p => (p.left ? '16px 10px 15px 20px' : '16px 20px 15px 10px')};
  @media screen and (min-width: 1280px) {
    padding: ${p => (p.left ? '16px 10px 15px 28px' : '16px 28px 15px 10px')};
  }

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TrData = styled.tr`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:first-child {
    margin-top: 8px;
  }
  position: relative;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const StyledTd = styled.td`
  position: relative;
  padding-left: ${p => (p.name ? '58px' : '0')};
  padding-right: ${p => (p.right ? '20px' : '0')};

  height: 52px;
  line-height: calc(18 / 16);
  font-weight: ${p => (p.type ? '700' : '400')};
  text-align: ${p => (p.left ? 'left' : 'right')};

  @media screen and (max-width: 767px) {
    max-width: 188px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${p => (p.name ? '68px' : '0')};
    padding-right: ${p => (p.right ? '28px' : '0')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 18px;
    @media screen and (min-width: 1280px) {
      left: 28px;
    }
    transform: translateY(-50%);
    display: ${p => (p.name ? 'block' : 'none')};
    width: 24px;
    height: 24px;
    background-color: ${switchBgStatistic};
    border-radius: 2px;
  }
`;

export const TrSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  margin-top: 16px;
`;

export const TrSummaryField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media screen and (min-width: 1280px) {
    padding: 0 28px;
  }
`;

export const TrSummaryStr = styled.span`
  font-weight: 700;
  line-height: calc(24 / 16);
`;

export const TrSummaryNum = styled.span`
  font-weight: 700;
  line-height: calc(24 / 16);
  color: ${p => (p.red ? '#FF6596' : '#24CCA7')};
`;

export const SelectWrap = styled.div`
  @media screen and (max-width: 767px) {
    display: block;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const customStylesSelect = isMobile => ({
  control: styles => ({
    ...styles,
    backgroundColor: 'inherit',
    width: '100%',
    height: '50px',
    border: '1px solid #000000',
    borderRadius: '30px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    paddingLeft: '10px',
    paddingRight: '16px',

    color: '#e0e0e0',
    fontFamily: 'Exo,  sans-serif',
    fontWeight: `400`,
    fontSize: `18`,
    lineHeight: 1.5,
    outline: 'none',
    cursor: 'pointer',
    marginBottom: isMobile ? '20px' : '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':hover': {
      borderColor: '#000000',
    },
  }),
  container: styles => ({
    ...styles,
    flexGrow: '1',
    ':first-child': {
      marginRight: isMobile ? '0' : '20px',
      flexGrow: '2',
      flexShrink: '0',
    },
  }),
  ValueContainer: styles => ({
    ...styles,
    paddingRight: '10px',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    borderRadius: '15px',
    padding: '15px',
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
      ? data.color
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
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '15px',
    zIndex: '1000000',
  }),
  menuList: styles => ({
    ...styles,
    overflow: 'hidden scroll',

    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '2px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: ' 2px',
    },
  }),
});
