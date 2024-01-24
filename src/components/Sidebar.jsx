import { Link, NavLink } from "react-router-dom";
import logo from "/geegpay-logo.svg"
import dashboardIcon from "/dashboard-icon.svg"
import trendIcon from "/trend-up.svg"
import peopleIcon from "/people.svg"
import boxIcon from "/box.svg"
import discountIcon from "/discount-shape.svg"
import infoIcon from "/info-circle.svg"
import sunIcon from "/sun.svg"
import moonIcon from "/moon.svg"
import { useEffect } from "react";

const Sidebar = ({ isActive, setIsActive }) => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && isActive) setIsActive(false);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [setIsActive]);

    return (
        <>
            {/* Overlay div */}
            {isActive && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-50 ease-in-out transition-all duration-300"
                    onClick={() => setIsActive(false)}
                />
            )}

            <div className={`${isActive ? "translate-x-0" : "-translate-x-96"} z-50 lg:translate-x-0 -translate-x-96 ease-in-out transition-transform duration-300 fixed left-0 top-0 bottom-0 bg-[#F7F8FA] w-20 flex flex-col justify-start items-center gap-7 py-7 border border-r-[#EBECF2]`}>
                <Link to="/">
                    <img src={logo} />
                </Link>

                <NavLink to="" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-6 text-center w-full border-r-4 border-transparent"}>
                    <img src={dashboardIcon} />
                </NavLink>

                <NavLink to="trends" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-8 text-center w-full border-r-4 border-transparent"}>
                    <img src={trendIcon} />
                </NavLink>

                <NavLink to="accounts" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-6 text-center w-full border-r-4 border-transparent"}>
                    <img src={peopleIcon} />
                </NavLink>

                <NavLink to="box" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-8 text-center w-full border-r-4 border-transparent"}>
                    <img src={boxIcon} />
                </NavLink>

                <NavLink to="discount" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-8 text-center w-full border-r-4 border-transparent"}>
                    <img src={discountIcon} />
                </NavLink>

                <NavLink to="information" className={({ isActive }) => isActive ? "border-r-primaryBlue border-r-4 rounded w-full text-center pl-6 h-fit" : "h-fit pl-8 text-center w-full border-r-4 border-transparent"}>
                    <img src={infoIcon} />
                </NavLink>

                <div className="flex flex-col justify-start items-center rounded-full bg-white p-3 gap-5">
                    <img src={sunIcon} className="cursor-pointer" />
                    <img src={moonIcon} className="cursor-pointer" />
                </div>
            </div>
        </>
    )
}

export default Sidebar;