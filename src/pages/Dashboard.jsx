import LastFiveOrders from "../components/chart/LastFiveOrders";
import SalesTrend from "../components/chart/SalesTrend";
import TopPlatform from "../components/chart/TopPlatform";
import TotalMetrics from "../components/chart/TotalMetrics";

export const Dashboard = () => {
    return (
        <section className="p-5 w-full">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                <SalesTrend />
                <TotalMetrics />
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                <LastFiveOrders />
                <TopPlatform />
            </div>
        </section>
    )
}

export default Dashboard;