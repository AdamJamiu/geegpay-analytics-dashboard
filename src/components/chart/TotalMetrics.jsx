import totalOrders from "/box-tick.svg"
import totalRefunds from "/3d-rotate.svg"
import shoppingCart from "/shopping-cart.svg"
import coin from "/coin.svg"

import lineChartGreen from "/chart-green.svg"
import lineChartRed from "/line-chart-red.svg"

import trendsUp from "/trending-up.svg"
import trendsDown from "/trend-down.svg"
// import LineChart from "./LineChart";

const TotalMetrics = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-4">
            <div className="p-3 rounded-xl bg-white border-borderGray border font-plus-jakarta-sans">
                <div className="w-full flex flex-row justify-between items-center gap-5">
                    <div className="p-1 rounded-full border-ordersBorder border ease transition-all hover:bg-gray-100">
                        <img src={totalOrders} />
                    </div>
                    {/* <LineChart /> */}
                    <img src={lineChartGreen} />

                </div>
                <h2 className="text-[#898989] mt-4 mb-2 font-medium text-md">Total Orders</h2>
                <h2 className="font-semibold text-[#3A3F51] text-xl">350</h2>

                <div className="w-full flex flex-row justify-between items-center mt-3 text-xs font-inter">
                    <div className="px-2 py-1 bg-[#34CAA51F] rounded-full flex flex-row justify-start items-center gap-1">
                        <img src={trendsUp} />
                        <span className="text-primaryGreen">23,5%</span>
                    </div>

                    <span className="min-w-max">vs previous month</span>

                </div>
            </div>

            {/* Total Refund */}
            <div className="p-3 rounded-xl bg-white border-borderGray border font-plus-jakarta-sans">
                <div className="w-full flex flex-row justify-between items-center gap-5">
                    <div className="p-1 rounded-full border-ordersBorder border ease transition-all hover:bg-gray-100">
                        <img src={totalRefunds} />
                    </div>
                    <img src={lineChartRed} />

                </div>
                <h2 className="text-[#898989] mt-4 mb-2 font-medium text-md">Total Refund</h2>
                <h2 className="font-semibold text-[#3A3F51] text-xl">270</h2>

                <div className="w-full flex flex-row justify-between items-center mt-3 text-xs font-inter">
                    <div className="px-3 py-1 bg-[#ED544E1F] rounded-full flex flex-row justify-center items-center gap-1">
                        <img src={trendsDown} />
                        <span className="text-dangerRed">23,5%</span>
                    </div>

                    <span className="min-w-max">vs previous month</span>

                </div>
            </div>

            {/*  Average Sales*/}
            <div className="p-3 rounded-xl bg-white border-borderGray border font-plus-jakarta-sans">
                <div className="w-full flex flex-row justify-between items-center gap-5">
                    <div className="p-1 rounded-full border-ordersBorder border ease transition-all hover:bg-gray-100">
                        <img src={shoppingCart} />
                    </div>
                    <img src={lineChartRed} />

                </div>

                <h2 className="text-[#898989] mt-4 mb-2 font-medium text-md">Average Sales</h2>
                <h2 className="font-semibold text-[#3A3F51] text-xl">1567</h2>

                <div className="w-full flex flex-row justify-between items-center mt-3 text-xs font-inter">
                    <div className="px-3 py-1 bg-[#ED544E1F] rounded-full flex flex-row justify-center items-center gap-1">
                        <img src={trendsDown} />
                        <span className="text-dangerRed">23,5%</span>
                    </div>

                    <span className="min-w-max">vs previous month</span>

                </div>
            </div>

            {/* Total Income */}
            <div className="p-3 rounded-xl bg-white border-borderGray border font-plus-jakarta-sans">
                <div className="w-full flex flex-row justify-between items-center gap-5">
                    <div className="p-1 rounded-full border-ordersBorder border ease transition-all hover:bg-gray-100">
                        <img src={coin} />
                    </div>
                    <img src={lineChartGreen} />

                </div>
                <h2 className="text-[#898989] mt-4 mb-2 font-medium text-md">Total Income</h2>
                <h2 className="font-semibold text-[#3A3F51] text-xl">$350.000</h2>

                <div className="w-full flex flex-row justify-between items-center mt-3 text-xs font-inter">
                    <div className="px-3 py-1 bg-[#ED544E1F] rounded-full flex flex-row justify-center items-center gap-1">
                        <img src={trendsDown} />
                        <span className="text-dangerRed">23,5%</span>
                    </div>

                    <span className="min-w-max">vs previous month</span>

                </div>
            </div>

        </div>
    )
}

export default TotalMetrics;