import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import { Doughnut } from 'react-chartjs-2';
import theme from 'utils/theme';

export const Chart = ({ trSummary }) => {
    ChartJS.register(ArcElement, Tooltip);
    const options = {
        cutout: "70%"
    }
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: trSummary && trSummary?.categoriesSummary.length > 0 ? [] : [100],
                backgroundColor: trSummary && trSummary?.categoriesSummary.length > 0 ? [] : ['#BDBDBD'],
                borderColor: [
                    'transparent',
                ],
            },
        ],
    };

    let redraw = false;

    const chartInfoList = () => {
        if (trSummary.categoriesSummary.length > 0) {

            trSummary.categoriesSummary.forEach(({ name, type, total }) => {
                if (type === "INCOME") {
                    return;
                }
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

    const redrawValue = () => {
        if (trSummary || trSummary?.categoriesSummary.length === 0) {
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
