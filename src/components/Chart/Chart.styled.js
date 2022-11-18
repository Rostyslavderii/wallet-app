import styled from 'styled-components';
// import { RevolvingDot } from 'react-loader-spinner';

export const Loading = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BalanceText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  font-family: ${p => p.theme.ff.familyPoppins};
  font-weight: ${p => p.theme.fontWeight.fw7};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
`;
