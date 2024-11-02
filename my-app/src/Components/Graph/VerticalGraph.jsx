import React from "react";
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const VerticalGraph = () => {
    const data = {
        labels: ['Wheego..', 'Th!ink', 'Rivian', 'Subaru', 'Smart', 'Porsche', 'Volvo', 'Volksw..', 'Toyota', 'Tesla'],
        datasets: [
            {
                label: 'Top 10 Vehicle',
                data: [10, 10, 30, 20, 30, 100, 200, 200, 400, 4200],
                backgroundColor: '#61DBFB'
            }
        ]
    };

    const options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'  // Legend text color
                }
            },
            tooltip: {
                enabled: true,
                bodyColor: 'white',  // Tooltip text color
                titleColor: 'white'  // Tooltip title color
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'  // X-axis label color
                }
            },
            y: {
                ticks: {
                    color: 'white'  // Y-axis label color
                }
            }
        }
    };

    return (
        <div style={{ height: '330px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default VerticalGraph;
