import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import theme from 'utils/theme';
// import { useSelector } from 'react-redux';
// import { selectBalance } from 'redux/transactions/transactionSelectors';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ trSummary, isLoading }) => {
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


    return (
        !isLoading && <Doughnut redraw={true} options={options} data={data} />
    )
}
