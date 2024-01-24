import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "",
        },
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            display: false,
            ticks: {
                display: false,
            },
        },
        y: {
            display: false,
            ticks: {
                display: false,
            },
        },
    },
};

const labels = [5, 30, 40, 20, 30, 20, 10];

export const data = {
    labels: false,
    datasets: [
        {
            label: '',
            data: labels,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

export function LineChart() {
    return <Line options={options} data={data} width={50} height={100} />;
}

export default LineChart;