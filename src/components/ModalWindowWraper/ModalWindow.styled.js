import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  min-height: 100%;
  padding-top: 50px;

  bottom: 0;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  @media (min-width: 768px) {
    top: -85px;
    padding-top: 0;
    z-index: 100;
  }
`;

export const Content = styled.div`
  min-width: 320px;
  width: 100%;

  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 37px;

  left: calc(50% - 320px / 2);

  @media (max-width: 767px) {
    overflow: hidden scroll;
    height: 100%;
  }

  z-index: 10;

  background-color: ${p => p.theme.colors.white};
  @media (min-width: 425px) {
    position: absolute;
    width: 425px;
    padding: 40px 73px;
    left: calc(50% - 425px / 2);
    top: 30px;
  }
  @media (min-width: 768px) {
    width: 540px;
    top: calc(50% - 603px / 2);
    left: calc(50% - 540px / 2);

    border-radius: 20px;
  }
`;
