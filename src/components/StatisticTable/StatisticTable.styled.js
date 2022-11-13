import styled from 'styled-components';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import icon from '../../images/icons/accardionBtn.svg'

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
    max-height: 80vh;
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
  padding: 16px 10px 15px 20px;
  padding: ${p => p.left ? '16px 10px 15px 20px' : '16px 20px 15px 10px'};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TrData = styled.tr`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    &:not(:last-child) {
      margin-bottom: 8px;
  }
  &:first-child {margin-top: 8px}
    position: relative;
    font-size: 16px;
  
     
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    
  
`;

export const StyledTd = styled.td`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${p => (p.leftPosition ? 'end' : 'auto')};

  padding: 8px 10px;
  padding-left: ${p => (p.name ? '40px' : '10px')};
  height: 52px;
  line-height: calc(18 / 16);
  font-weight: ${p => (p.type ? '700' : '400')};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
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

export const SelectField = styled.div`
      @media screen and (max-width: 767px) {
      &:not(:last-child) {
      margin-bottom: 20px;
    } 
  }
   position: relative;

   &::after {
  content: '';
  background-image: url(${icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 18px;
  height: 9px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  position: absolute;
  pointer-events: none;
}
`;

export const Select = styled.select`
  appearance: none;
  width: 160px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 12px 30px 14px 20px;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  &::-ms-expand {
     display: none;
}

  @media screen and (max-width: 767px) {
      width: 100%;
    } 
    @media screen and (min-width: 1280px) {
      width: 182px;
    }
`;

export const Option = styled.option`
  line-height: calc(24 / 16);
`;