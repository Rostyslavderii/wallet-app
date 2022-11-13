import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 144px;
`;

const TableCurrency = styled.table`
  width: 100%;
  text-align: center;
  font-family: ${p => p.theme.ff.familyExo};
`;

const Container = styled.div`
  width: 100%;
  min-height: 180px;
  margin: 0 auto;
  @media screen and (min-width: 370px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
    min-height: 210px;
  }
  background-color: ${p => p.theme.colors.btBlue};
  background-image: url('https://i.ibb.co/9VgPbZ2/Rectangle-6.png'),
    url('https://i.ibb.co/j8hdnFZ/Vector-7.png');
  background-repeat: no-repeat;
  background-size: 100% 60px, contain;
  background-position: top left, bottom left;
  border-radius: 30px;
`;

const Head = styled.tr`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.white};
`;

const ItemHead = styled.th`
  padding: 16px 0;
  width: calc(100% / 3);
`;

const ItemBody = styled.td`
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.white};
`;

export { TableCurrency, Container, Head, ItemHead, ItemBody, Wrapper };
