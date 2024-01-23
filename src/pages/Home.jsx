import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout;