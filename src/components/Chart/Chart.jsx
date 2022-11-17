import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { switchBgStatistic } from 'helpers/switchBgStatistic';
import { Doughnut } from 'react-chartjs-2';
import theme from 'utils/theme';

export const Chart = ({ trSummary, isLoading }) => {
    ChartJS.register(ArcElement, Tooltip);

    const data = {
        labels: [],
        datasets: [
            {
                label: 'Statistics',
                data: trSummary && trSummary?.categoriesSummary.length > 0 ? [] : [100],
                backgroundColor:
                    trSummary && trSummary?.categoriesSummary.length > 0
                        ? []
                        : ['#BDBDBD'],
                borderColor: ['transparent'],
            },
        ],
    };

    const options = {
        cutout: '70%',
        // animation: {
        //     delay: 200
        // },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function ({ label, raw }) {
                        return `${label}: ${raw}%`;
                    },
                },
            },
        },
    };

    let redraw = false;

    const chartInfoList = () => {
        if (trSummary.categoriesSummary.length > 0) {
            trSummary.categoriesSummary.forEach(({ name, type, total }) => {
                if (type === 'INCOME') {
                    return;
                }
                const bgColor = switchBgStatistic({ name, theme });
                const amount = Math.abs(total);
                const expence = Math.abs(trSummary.expenseSummary);
                data.datasets[0].backgroundColor.push(bgColor);
                data.labels.push(name);

                const percentage = Math.round((amount / expence) * 100);
                data.datasets[0].data.push(percentage);
            });
        }
    };

    if (trSummary) {
        chartInfoList();
    }

    const redrawValue = () => {
        if (trSummary) {
            redraw = true;
            return redraw;
        } else {
            redraw = false;
            return redraw;
        }
    };

    return (
        <>
            {isLoading ? (
                <h2>Loading</h2>
            ) : (
                <Doughnut redraw={redrawValue()} options={options} data={data} />
            )}
        </>
    );
};
