import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display:false
        },
        title: {
            display: true,
        },
    },
};

const labels = ['2023', '2024'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [0.0025, 0.001],
            borderColor: '#06b6d4',
            backgroundColor: '#cfd3d590',
            order: 0
        },
        {
            label: '',
            data: [0.0025, 0.001],
            borderColor: '#06b6d4',
            backgroundColor: '#cfd3d590',
            type: 'line',
            order: 1
        }
    ],
};

const ChartDraw = () => {
    return <div className='py-2 px-8 bg-gray-300 dark:bg-[#121212] relative'>
        <div className="text-sm absolute top-16 -left-3 -rotate-90">Volumn</div>
        <Bar options={options} data={data} height={75} />
        <div className="text-sm absolute top-16 -right-10 rotate-90">Average Price</div>
    </div>
}

export default ChartDraw;