import styled from 'styled-components';

const switchColor = p => {
  switch (p.type) {
    case 'INCOME':
      return p.theme.colors.btGreen;
    case 'EXPENSE':
      return p.theme.colors.btPink;
    default:
      return p.theme.colors.black;
  }
};

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  font-family: ${p => p.theme.ff.familyExo};
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    width: 704px;
    text-align: center;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
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
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }
  padding-left: 20px;
  padding-right: 20px;
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
