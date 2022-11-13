import styled from 'styled-components';

export const Head = styled.header`
  background-color: ${p => p.theme.colors.white};
  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 5;
  }
`;

export const DivHeader = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  display: flex;
  justify-content: space-between;

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  color: ${p => p.theme.colors.inputGray};
`;

export const SpanNameHeader = styled('span')`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-right: 12px;
    border-right: 1px solid rgba(189, 189, 189, 1);
  }
`;

export const DivHeaderUser = styled('div')`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const LogOutButton = styled('button')`
  display: flex;
  gap: 8px;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  cursor: pointer;

  font-family: ${p => p.theme.ff.familyExo};
  font-weight: ${p => p.theme.fontWeight.fw4};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;

  color: ${p => p.theme.colors.inputGray};
`;
