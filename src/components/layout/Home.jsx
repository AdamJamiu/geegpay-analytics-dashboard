import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar"

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="lg:pl-20 bg-secondaryGray min-h-[84vh] h-full">
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout;