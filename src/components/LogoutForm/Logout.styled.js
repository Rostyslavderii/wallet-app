import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  min-height: 100%;

  bottom: 0;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  padding: 40px 73px;
  width: 540px;

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
  background-color: ${p => p.theme.colors.white};
`;
