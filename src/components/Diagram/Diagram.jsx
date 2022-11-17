import { Chart } from 'components/Chart/Chart';
import { StatisticTabel } from 'components/StatisticTable/StatisticTable';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { getTransactionsSummary } from 'redux/transactionsSummary/trSummaryOperations';
import {
    selectError,
    selectIsLoadingSummary,
    selectTrSummary,
} from 'redux/transactionsSummary/trSummarySelectors';
import { ChartBox, Box, Title, Wrapper, BalanceText } from './Diagram.styled';

export const Diagram = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    let trSummary = useSelector(selectTrSummary);

    const isLoadingSummary = useSelector(selectIsLoadingSummary);
    const balance = useSelector(selectBalance);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const isMobile = useMedia('(max-width: 767px)');

    useEffect(() => {
        if (month && year) {
            dispatch(getTransactionsSummary({ month, year }));
        }
    }, [month, year, dispatch]);

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
                    <Chart trSummary={summaryData()} isLoading={isLoadingSummary} />
                    {isMobile && <BalanceText>&#8372; {balance.toFixed(2)}</BalanceText>}
                </ChartBox>
                <StatisticTabel
                    setYear={setYear}
                    setMonth={setMonth}
                    trSummary={summaryData()}
                />
                {error && <p>{error}</p>}
            </Box>
        </Wrapper>
    );
};
