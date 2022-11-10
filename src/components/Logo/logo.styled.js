import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  gap: 15px; /* !mob 20px */
  align-items: center;
  text-decoration: none;

  padding: 0;
  margin: 0;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px; /* !mob 30px */
  line-height: calc(45 / 30);
  color: #000;
`;

export const LogoImg = styled('img')`
  width: 30px; /* !mob 40px */
  height: 30px; /* !mob 40px */
`;
