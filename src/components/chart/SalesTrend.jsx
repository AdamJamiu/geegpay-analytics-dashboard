import checvronDown from "/chevron-down.svg"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
            text: '',
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: true,
                borderDash: [5, 5],
            },
            beginAtZero: false,
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fakeData = [15, 20, 15, 30, 50, 20, 25, 30, 25, 10, 45, 30]

const data = {
    labels,
    datasets: [
        {
            label: '',
            data: fakeData,
            backgroundColor: 'rgba(52, 202, 165, 0.1)',
            hoverBackgroundColor: "rgba(52, 202, 165, 0.5)",
            borderRadius: 20,
        },
    ],
};

export const SalesTrend = () => {

    return (
        <div className="rounded-xl border border-borderGray p-5 font-plus-jakarta-sans w-full col-span-1 md:col-span-2 bg-white">
            <div className="w-full flex flex-row justify-between items-center mb-2">
                <h2 className="font-semibold text-lg text-neutralGray">Sales Trends</h2>

                <div className="flex flex-row justify-start items-center gap-3">
                    <p className="text-[#3A3F51] font-medium text-xs sm:text-sm">Sort by: </p>

                    <div className="rounded-full py-2 px-3 border text-xs sm:text-sm font-medium min-w-max flex flex-row justify-start items-center gap-3">
                        <p className='text-[#3A3F51]'>Weekly</p>
                        <img src={checvronDown} />
                    </div>
                </div>
            </div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default SalesTrend;