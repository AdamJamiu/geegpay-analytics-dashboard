import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar"

const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(false)

    const togglActive = () => setIsActive(prev => !prev)

    return (
        <>
            <Navbar togglActive={togglActive} />
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <div className="lg:pl-20 pt-20 bg-secondaryGray min-h-[84vh] h-full">
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout;