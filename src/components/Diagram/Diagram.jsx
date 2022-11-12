import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTransactionsSummary } from "redux/transactionsSummary/trSummaryOperations";
import { selectTrSummary } from "redux/transactionsSummary/trSummarySelectors";

export const Diagram = () => {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const trSummary = useSelector(selectTrSummary);
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
            <select onChange={handleChange} name="month">
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </>
    )
}