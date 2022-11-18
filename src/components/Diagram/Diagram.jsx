import { Chart } from 'components/Chart/Chart';
import { StatisticTabel } from 'components/StatisticTable/StatisticTable';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { getTransactionsSummary } from 'redux/transactionsSummary/trSummaryOperations';
import {
  selectError,
  selectIsLoadingSummary,
  selectTrSummary,
} from 'redux/transactionsSummary/trSummarySelectors';
import { ChartBox, Box, Title, Wrapper } from './Diagram.styled';

export const Diagram = () => {
  const [month, setMonth] = useState(
    () => JSON.parse(localStorage.getItem('month-statistic')) ?? ''
  );
  const [year, setYear] = useState(
    () => JSON.parse(localStorage.getItem('year-statistic')) ?? ''
  );

  let trSummary = useSelector(selectTrSummary);

  const isLoadingSummary = useSelector(selectIsLoadingSummary);
  const balance = useSelector(selectBalance);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (month && year) {
      dispatch(getTransactionsSummary({ month, year }));
    }
  }, [month, year, dispatch]);

  const setMonthLS = month => {
    setMonth(month);
    localStorage.setItem('month-statistic', month);
  };

  const setYearLS = year => {
    setYear(year);
    localStorage.setItem('year-statistic', year);
  };

  return (
    <Wrapper>
      <Title>Statistics</Title>
      <Box>
        <ChartBox>
          <Chart
            trSummary={trSummary}
            isLoading={isLoadingSummary}
            balance={balance}
          />
        </ChartBox>
        <StatisticTabel
          month={month}
          year={year}
          setYear={setYearLS}
          setMonth={setMonthLS}
          trSummary={trSummary}
        />
        {error && <p>{error}</p>}
      </Box>
    </Wrapper>
  );
};
