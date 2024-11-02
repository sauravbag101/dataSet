import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut as DoughnutChart } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PollDoughnutChart = () => {
    const data = {
        labels: ['25k (25.55%)', '72k (74.45%)'],
        datasets: [{
            label: 'Poll',
            data: [2, 6],
            backgroundColor: ['#eeeee4', '#61DBFB'],
            borderColor: ['#eeeee4', '#61DBFB'],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#FFFFFF' // Set legend text color to white
                }
            },
            tooltip: {
                bodyColor: '#FFFFFF', // Set tooltip text color to white
                titleColor: '#FFFFFF',
                backgroundColor: '#333333', // Optional: darken tooltip background
            },
        },
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <DoughnutChart data={data} options={options} />
        </div>
    );
}

export default PollDoughnutChart;
