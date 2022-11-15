import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import theme from 'utils/theme';
// import { useSelector } from 'react-redux';
// import { selectBalance } from 'redux/transactions/transactionSelectors';

export const Chart = ({ trSummary }) => {
    ChartJS.register(ArcElement, Tooltip);
    // console.log("chart component")
    // const balance = useSelector(selectBalance);
    const options = {
        cutout: "70%"
    }
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: trSummary ? [] : [100],
                backgroundColor: trSummary ? [] : ['#BDBDBD'],
                borderColor: [
                    'transparent',
                ],
            },
        ],
    };

    let redraw = false;

    useEffect(() => {
        const chartInfoList = () => {
            if (trSummary.categoriesSummary.length > 0) {

                trSummary.categoriesSummary.forEach(({ name, type, total }) => {
                    if (type === "INCOME") {
                        return;
                    }
                    // console.log("chart function info");
                    const bgColor = switchBgStatistic({ name, theme });
                    const amount = Math.abs(total);
                    const expence = Math.abs(trSummary.expenseSummary);
                    data.datasets[0].backgroundColor.push(bgColor);
                    data.labels.push(name);

                    const totalTr = Math.round(amount / expence * 100);
                    data.datasets[0].data.push(totalTr);
                })
            }
        }

        if (trSummary) {
            chartInfoList()
        }
    }, [trSummary, data.datasets, data.labels])

    const redrawValue = () => {
        if (trSummary) {
            redraw = true;
            return redraw;
        } else {
            return redraw;
        }
    }

    return (
        <Doughnut redraw={redrawValue()} options={options} data={data} />
    )
}
