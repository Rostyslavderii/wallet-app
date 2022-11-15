import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  TableCurrency,
  Container,
  Head,
  ItemHead,
  ItemBody,
} from './Currency.styled';
import { Loader } from 'components/Loader/Loader';
export const Currency = () => {
  const [dataCurrency, setDataCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseRequest = axios.create({
      baseURL: 'https://api.privatbank.ua/p24api',
    });

    async function fetchCurrency() {
      const list = ['USD', 'EUR'];
      setIsLoading(true);
      try {
        const { data } = await baseRequest.get(
          '/pubinfo?json&exchange&coursid=5'
        );
        const result = data.filter(({ ccy }) => list.includes(ccy));
        setDataCurrency(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <TableCurrency>
          <thead>
            <Head>
              <ItemHead>Currency</ItemHead>
              <ItemHead>Purchase</ItemHead>
              <ItemHead>Sale</ItemHead>
            </Head>
          </thead>
          <tbody>
            {dataCurrency.length > 0 &&
              dataCurrency.map(({ ccy, buy, sale }) => (
                <tr key={ccy}>
                  <ItemBody>{ccy}</ItemBody>
                  <ItemBody>{buy.slice(0, 5)}</ItemBody>
                  <ItemBody>{sale.slice(0, 5)}</ItemBody>
                </tr>
              ))}
            {error && (
              <>
                <tr>
                  <ItemBody>USD</ItemBody>
                  <ItemBody>0.00</ItemBody>
                  <ItemBody>0.00</ItemBody>
                </tr>
                <tr>
                  <ItemBody>EUR</ItemBody>
                  <ItemBody>0.00</ItemBody>
                  <ItemBody>0.00</ItemBody>
                </tr>
              </>
            )}
          </tbody>
        </TableCurrency>
      )}
    </Container>
  );
};
