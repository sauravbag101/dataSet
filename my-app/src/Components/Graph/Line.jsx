import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const LineGraph = () => {

    const data = {
        labels: [1990, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024],
        datasets: [
            {
                label: 'Top 10 Vehicle',
                data: [0, 0, 4.8, 3.8, 5.2, 14.2, 10.7, 19.3, 9.7],
                backgroundColor: '#61DBFB',
                borderColor: '#61DBFB',
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFFFFF' // Set legend text color to white
                }
            },
            title: {
                display: true,
                
                color: '#FFFFFF', // Set title text color to white
            },
            tooltip: {
                bodyColor: '#FFFFFF', // Set tooltip text color to white
                titleColor: '#FFFFFF',
                backgroundColor: '#333333', // Optional: darken tooltip background
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFFFFF', // Set x-axis labels color to white
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Set x-axis grid color to semi-transparent white
                }
            },
            y: {
                ticks: {
                    color: '#FFFFFF', // Set y-axis labels color to white
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Set y-axis grid color to semi-transparent white
                }
            }
        }
    };

    return (
        <div style={{ height: '', width: '100%' }}>
            <Line options={options} data={data} />
        </div>
    );
};
