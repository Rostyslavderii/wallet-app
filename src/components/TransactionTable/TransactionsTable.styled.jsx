import styled from 'styled-components';
import {
  chooseTextAlign,
  switchColor,
  chooseBtnColor,
} from 'helpers/transformDate';

export const FixedHeadWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 58px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: hidden scroll;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 715px;
    max-height: 65vh;
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

export const TableHead = styled.ul`
  display: flex;
  position: absolute;
  width: calc(100% + 10px);
  top: 0;
  left: -5px;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.white};
`;

export const TableHeading = styled.li`
  border: none;

  text-align: ${p => (p.left ? 'left' : 'center')};

  padding: 16px 10px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  &:nth-child(1) {
    width: 80px;
  }
  &:nth-child(2) {
    width: 70px;
  }
  &:nth-child(3) {
    width: 135px;
  }
  &:nth-child(4) {
    width: 130px;
  }
  &:nth-child(5),
  &:nth-child(6) {
    width: calc((100% - 460px) / 2);
  }
  &:last-child {
    width: 40px;
    padding-right: 20px;
  }
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
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      &::after {
        content: '';
        display: block;
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
    flex-grow: 1;
    width: 100%;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }
  justify-content: space-between;

  padding: 8px 10px;
  height: 52px;
  line-height: calc(24 / 16);
  color: ${switchColor};
  font-weight: ${p => (p.type ? '700' : '400')};
  text-align: ${chooseTextAlign};
  font-size: 16px;
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      width: 75px;
    }
    &:nth-child(2) {
      width: 70px;
    }
    &:nth-child(3) {
      width: 135px;
    }
    &:nth-child(4) {
      width: 130px;
    }
    &:last-child {
      width: 40px;
      padding-right: 5px;
    }
  }
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
  }
  display: block;
  white-space: nowrap;
  max-width: 110px;
  max-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 5px;
  }
  padding: 3px 5px;
  border: none;
  border-radius: 6px;
  color: ${p => (p.edit ? 'gray' : p.theme.colors.white)};
  background-color: ${chooseBtnColor};
  transition: box-shadow 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    box-shadow: 0px 2px 6px ${chooseBtnColor};
  }
  svg {
    width: 24px;
    height: 24px;
    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
