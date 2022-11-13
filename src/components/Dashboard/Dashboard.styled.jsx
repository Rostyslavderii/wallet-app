import styled from 'styled-components';

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    padding-top: 0;
  }
`;

export const FlexWrap = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    padding-top: 40px;
    padding-bottom: 47px;
    padding-right: 68px;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: calc(100vh - 85px);
      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;
