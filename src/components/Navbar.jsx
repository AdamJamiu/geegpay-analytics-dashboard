import searchIcon from "/search-icon.svg"
import calenderIcon from "/solar_calendar-linear.svg"
import bellIcon from "/bell.svg"
import avatarIcon from '/justin-bergson.png'
import checronDownIcon from '/chevron-down.svg'
import { useEffect, useState } from "react"

const Navbar = ({ togglActive }) => {
    const [isScrolled, setIsScrolled] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;

            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${isScrolled ? 'transform translate-y-0 fixed' : ' -translate-y-1'} ease-in-out transition-transform bg-[#F7F8FA] w-full border-b-[#EBECF2] border lg:pl-28 py-4 px-4 sm:pr-5 flex flex-row justify-between items-center`}>

            <div className="flex flex-row justify-start items-center gap-4 lg:gap-2">
                <div onClick={togglActive} className="lg:hidden block hover:cursor-pointer p-2 rounded-md hover:bg-white ease transition-all focus:bg-gray-100 active:bg-gray-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7H21" stroke="#26282C" stroke-width="2" stroke-linecap="round" />
                        <path d="M3 12H21" stroke="#26282C" stroke-width="2" stroke-linecap="round" />
                        <path d="M3 17H21" stroke="#26282C" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <h2 className="font-semibold text-xl font-plus-jakarta-sans text-primaryBlack">Dashboard</h2>
            </div>

            <div className="flex-row justify-between items-center gap-5 lg:flex hidden">
                <div className="relative lg:block hidden">
                    <input placeholder="Search..." className="rounded-full border border-b-[#EBECF2] pl-10 py-3 bg-white w-[349px]" />
                    <img src={searchIcon} className="absolute left-4 top-4" />
                </div>

                <div className="lg:flex flex-row justify-start items-center gap-3 hidden">
                    <img src={calenderIcon} />
                    <p className="font-medium font-inter text-sm text-primaryBlack">November 15, 2023</p>
                </div>

                <div className="p-2 rounded-full border border-[#DADDDD] lg:block hidden">
                    <img src={bellIcon} />
                </div>

                <div className="px-2 py-1 rounded-full border border-[#DADDDD] flex flex-row justify-start items-center gap-4 font-inter cursor-pointer hover:bg-white ease transition-all">
                    <img src={avatarIcon} />

                    <div className="">
                        <p className="text-sm lg:text-md text-primaryBlack">Justin Bergson</p>
                        <p className="text-sm text-primaryGray">Justin@gmail.com</p>
                    </div>

                    <img src={checronDownIcon} />
                </div>


            </div>
            <img src={avatarIcon} className="block lg:hidden cursor-pointer" />
        </nav>
    )
}

export default Navbar;