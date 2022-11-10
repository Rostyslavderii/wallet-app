import axios from "axios";
import { useState, useEffect } from "react";
import { TableCurrency, Container, Head, ItemHead, ItemBody } from "./Currency.styled";

export const Currency = () => {
    const [dataCurrency, setDataCurrency] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCurrency() {
            const list = ["USD", "EUR"];
            setIsLoading(true)
            try {
                const { data } = await axios("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11");
                const result = data.filter(({ ccy }) => list.includes(ccy));
                setDataCurrency(result);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCurrency();
    }, [])

    return (
        <Container>
            {isLoading
                ? <p>Loading...</p>
                : <TableCurrency>
                    <thead>
                        <Head>
                            <ItemHead>Currency</ItemHead>
                            <ItemHead>Purchase</ItemHead>
                            <ItemHead>Sale</ItemHead>
                        </Head>
                    </thead>
                    <tbody>
                        {dataCurrency.length > 0 && dataCurrency.map(({ ccy, buy, sale }) =>
                            <tr key={ccy}>
                                <ItemBody>{ccy}</ItemBody>
                                <ItemBody>{buy.slice(0, 5)}</ItemBody>
                                <ItemBody>{sale.slice(0, 5)}</ItemBody>
                            </tr>)}
                    </tbody>
                </TableCurrency>}
            {error && <p>Information not found, an error occurred!</p>}
        </Container>
    )
};