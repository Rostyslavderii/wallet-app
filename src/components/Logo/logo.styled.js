import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;

  padding: 0;
  margin: 0;

  font-family: ${p => p.theme.ff.familyPoppins};
  font-weight: ${p => p.theme.fontWeight.fw7};
  font-size: ${p => p.theme.fontSize.fs18};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};

  @media (min-width: 768px) {
    gap: 20px;
    font-size: ${p => p.theme.fontSize.fs30};
  }
`;

export const LogoImg = styled('img')`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
