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

    // const isLoading = useSelector(selectIsLoading);
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

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'month':
                setMonth(value);
                break;
            case 'year':
                setYear(value);
                break;
            default:
                return;
        }
    };

    const result = (trSummary) => {
        if (!month && !year) {
            return trSummary = null;
        } else {
            return trSummary;
        }
    }

    return (
        <Wrapper>
            <Title>Statistics</Title>
            <Box>
                <ChartBox><Chart trSummary={result(trSummary)} /></ChartBox>
                <StatisticTabel handleChange={handleChange} trSummary={result(trSummary)} />
                {error && <p>{error}</p>}
            </Box>
        </Wrapper>
    );
};
