import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;
  padding: 8px 32px 11px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius.r30};
  @media screen and (min-width: 480px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    width: 395px;
  }
`;

export const Text = styled.p`
  font-family: 'Circe';
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;

  color: #a6a6a6;
`;
