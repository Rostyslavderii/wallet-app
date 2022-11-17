import { useEffect } from 'react';
import {
  TableCurrency,
  Container,
  Head,
  ItemHead,
  ItemBody,
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { getCurrency } from 'redux/privatBank/privatBankOperations';
import {
  selectCurrency,
  selectIsLoading,
} from 'redux/privatBank/privatBankSelectors';

export const Currency = () => {
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

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
            {currencyData && currencyData.length > 0 ? (
              currencyData.map(({ ccy, buy, sale }) => (
                <tr key={ccy}>
                  <ItemBody>{ccy}</ItemBody>
                  <ItemBody>{buy.slice(0, 5)}</ItemBody>
                  <ItemBody>{sale.slice(0, 5)}</ItemBody>
                </tr>
              ))
            ) : (
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
