import styled from 'styled-components';

const switchColor = ({ type, theme: { colors } }) => {
  switch (type) {
    case 'INCOME':
      return colors.btGreen;
    case 'EXPENSE':
      return colors.btPink;
    default:
      return colors.black;
  }
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: hidden scroll;
  margin: 0 auto;
  max-height: 60vh;
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 46px;
    margin-right: 0;
    max-width: 715px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.bgGrayRight};
    border-radius: 2px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${p => p.theme.ff.familyExo};
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    text-align: center;
  }
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
  text-align: ${p => (p.left ? 'left' : 'center')};

  padding: 16px 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TrData = styled.tr`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    background-color: ${p => p.theme.colors.white};
    border-radius: 10px;
    border-left: 5px solid ${switchColor};
  }

  position: relative;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const StyledTd = styled.td`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }
  padding: 8px 20px;
  height: 52px;
  line-height: calc(18 / 16);
  color: ${switchColor};
  font-weight: ${p => (p.type ? '700' : '400')};
  text-align: ${p => (p.left ? 'left' : 'center')};
`;

export const DataHeading = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const DataValue = styled.span`
  @media screen and (max-width: 767px) {
    text-align: end;
    justify-content: end;
  }
  display: inline-flex;
  margin-left: auto;
  width: 130px;
  max-height: 36px;
  overflow: hidden scroll;
  &::-webkit-scrollbar {
    width: ${p => (p.isScrollShown ? '4px' : '0')};
  }
  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.bgGrayRight};
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.lPurple};
    border-radius: 2px;
  }
  scrollbar-color: ${p => p.theme.colors.lPurple}${p => p.theme.colors.bgGrayRight};
`;
