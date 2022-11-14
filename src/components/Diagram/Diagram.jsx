import { Chart } from 'components/Chart/Chart';
import { StatisticTabel } from 'components/StatisticTable/StatisticTable';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSummary } from 'redux/transactionsSummary/trSummaryOperations';
import {
    selectError,
    selectIsLoading,
    selectTrSummary,
} from 'redux/transactionsSummary/trSummarySelectors';
import { ChartBox, Box, Title, Wrapper } from './Diagram.styled';

export const Diagram = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  let trSummary = useSelector(selectTrSummary);


  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchTransactionsSummary = ({ month, year }) => {
      dispatch(getTransactionsSummary({ month, year }));
    };


    const summaryList = (trSummary) => {
        if (!month || !year) {
            trSummary = null;
            return trSummary;
        } else {
            return trSummary;
        }
    }
  }, [month, year, dispatch]);

    return (
        <Wrapper>
            <Title>Statistics</Title>
            <Box>
                {!isLoading
                    ? <ChartBox><Chart trSummary={summaryList(trSummary)} /></ChartBox>
                    : <ChartBox></ChartBox>
                }
                <StatisticTabel
          setYear={setYear}
          setMonth={setMonth}
          trSummary={result(trSummary)}
        />
                {error && <p>{error}</p>}
            </Box>
        </Wrapper>
    );
};
