import { Chart } from 'components/Chart/Chart';
import { StatisticTabel } from 'components/StatisticTable/StatisticTable';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSummary } from 'redux/transactionsSummary/trSummaryOperations';
import {
    selectError,
    selectTrSummary,
} from 'redux/transactionsSummary/trSummarySelectors';
import { ChartBox, Box, Title, Wrapper } from './Diagram.styled';

export const Diagram = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    let trSummary = useSelector(selectTrSummary);

    // const isLoadingSummary = useSelector(selectIsLoadingSummary);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTransactionsSummary = ({ month, year }) => {
            dispatch(getTransactionsSummary({ month, year }));
        };

        if (month && year) {
            fetchTransactionsSummary({ month, year });
        }

    }, [month, year, dispatch]);

    const summaryList = (trSummary) => {
        if (!month || !year) {
            trSummary = null;
            return trSummary;
        } else {
            return trSummary;
        }
    }

    return (
        <Wrapper>
            <Title>Statistics</Title>
            <Box>
                <ChartBox>
                    <Chart trSummary={summaryList(trSummary)} />
                </ChartBox>
                <StatisticTabel
                    setYear={setYear}
                    setMonth={setMonth}
                    trSummary={summaryList(trSummary)}
                />
                {error && <p>{error}</p>}
            </Box>
        </Wrapper>
    );
};