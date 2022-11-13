import { Chart } from "components/Chart/Chart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTransactionsSummary } from "redux/transactionsSummary/trSummaryOperations";
import { selectError, selectTrSummary } from "redux/transactionsSummary/trSummarySelectors";

export const Diagram = () => {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const trSummary = useSelector(selectTrSummary);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTransactionsSummary = ({ month, year }) => {
            dispatch(getTransactionsSummary({ month, year }));
        }

        if (month && year) {
            fetchTransactionsSummary({ month, year })
        }

    }, [month, year, dispatch])

    const handleChange = ({ target: { name, value } }) => {
        console.log("trSummary", trSummary);
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
    }

    return (
        <>
            <div>Diagram</div>
            <div>
                <Chart trSummary={trSummary} />
                <select height="20" onChange={handleChange} id="year" name="year">
                    <option value="2022">2022</option>
                </select>
            </div>
            {error && <p>{error}</p>}
        </>
    )
}