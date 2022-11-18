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
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  //   const [month, setMonth] = useState(
  //     () => JSON.parse(localStorage.getItem('month-statistic')) ?? ''
  //   );
  //   const [year, setYear] = useState(
  //     () => JSON.parse(localStorage.getItem('year-statistic')) ?? ''
  //   );

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

  //   const setMonthLS = month => {
  //     console.log('MONTH', month);
  //     setMonth(month);
  //     localStorage.setItem('month-statistic', month);
  //   };

  //   const setYearLS = year => {
  //     console.log('YEAR', year);
  //     setYear(year);
  //     localStorage.setItem('year-statistic', year);
  //   };
  const summaryData = () => {
    if (!month || !year) {
      trSummary = null;
      return trSummary;
    } else {
      return trSummary;
    }
  };

  return (
    <Wrapper>
      <Title>Statistics</Title>
      <Box>
        <ChartBox>
          <Chart
            trSummary={summaryData()}
            isLoading={isLoadingSummary}
            balance={balance}
          />
        </ChartBox>
        <StatisticTabel
          month={month}
          year={year}
          setYear={setYear}
          setMonth={setMonth}
          trSummary={summaryData()}
        />
        {error && <p>{error}</p>}
      </Box>
    </Wrapper>
  );
};
