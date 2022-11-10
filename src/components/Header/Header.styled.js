import styled from 'styled-components';

export const DivHeader = styled('div')`
  padding-left: 20px; /* tab 32px */ /* desk 16px */
  padding-right: 20px; /* tab 32px */ /* desk 16px */
  padding-top: 15px; /* tab 20px */ /* desk 20px */
  padding-bottom: 15px; /* tab 20px */ /* desk 20px */

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);

  color: #bdbdbd;
`;

export const SpanNameHeader = styled('span')`
  padding-right: 12px;
  height: 30px;
  border-right: 1px solid rgba(189, 189, 189, 1);
`;

export const DivHeaderUser = styled('div')`
  display: flex;
  gap: 8px; /* !mob 12px*/
`;

export const LogOutButton = styled('button')`
  display: flex;
  gap: 8px;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;

  font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);

  color: #bdbdbd;
`;
