import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;
  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
  }
  padding: 8px 32px 11px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius.r30};
  @media screen and (min-width: 376px) {
    width: 336px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 0;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.ff.familyExo};
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;

  color: #a6a6a6;
`;

export const Amount = styled.p`
  margin-top: 12px;
  color: ${p => p.theme.colors.black};
  font-size: 30px;
  line-height: calc(36 / 30);
`;
