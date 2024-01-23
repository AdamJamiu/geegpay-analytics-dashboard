import LastFiveOrders from "../components/chart/LastFiveOrders";
import SalesTrend from "../components/chart/SalesTrend";
import TopPlatform from "../components/chart/TopPlatform";

export const Dashboard = () => {
    return (
        <section className="p-10">
            <div className="w-full grid grid-cols-3 gap-5">
                <SalesTrend />
                <TopPlatform />
            </div>

            <div className="w-full grid grid-cols-3 gap-7 mt-5">
                <LastFiveOrders />
                <TopPlatform />
            </div>
        </section>
    )
}

export default Dashboard;