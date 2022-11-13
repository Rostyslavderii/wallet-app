import styled from 'styled-components';

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: absolute;

  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;

  margin: 0 auto;
`;

export const Content = styled.div`
  min-width: 320px;
  width: 100%;
  max-width: 425px;
  margin: 0 auto;
  position: static;
  left: calc(50% - 425px / 2);
  // left: calc(50% - 320px / 2);
  @media (max-width: 425px) {
    left: calc(50% - 320px / 2);
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }

  z-index: 10;

  background: #ffffff;
  @media (min-width: 425px) {
    position: absolute;
    width: 425px;
    max-width: none;
    padding: 40px 73px;
  }
  @media (min-width: 768px) {
    width: 540px;
    top: calc(50% - 603px / 2);
    left: calc(50% - 540px / 2);

    border-radius: 20px;
  }
`;
