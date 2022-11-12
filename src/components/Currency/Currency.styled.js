import styled from 'styled-components';

const TableCurrency = styled.table`
  width: 100%;
  text-align: center;
`;

const Container = styled.div`
  width: 393px;
  height: 347px;
  background: #4a56e2;
  border-radius: 30px;
`;

const Head = styled.tr`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

const ItemHead = styled.th`
  padding: 16px 0;
  width: calc(100% / 3);
`;

const ItemBody = styled.td`
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export { TableCurrency, Container, Head, ItemHead, ItemBody };
