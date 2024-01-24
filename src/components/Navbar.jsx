import { useEffect, useRef, useState } from "react"

import searchIcon from "/search-icon.svg"
import calenderIcon from "/solar_calendar-linear.svg"
import bellIcon from "/bell.svg"
import avatarIcon from '/justin-bergson.png'
import checronDownIcon from '/chevron-down.svg'

const Navbar = ({ togglActive }) => {
    const dropdownRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    const dropdownVisibility = isVisible ? 'block' : 'hidden';

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsVisible(false);
    };

    // Add a click event listener to handle clicks outside the dropdown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const toggleDropdown = () => setIsVisible(prev => !prev);

    return (
        <nav className='fixed ease-in-out bg-[#F7F8FA] w-full border-b-[#EBECF2] border lg:pl-28 py-4 px-4 sm:pr-5 flex flex-row justify-between items-center'>

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
                        <p className="text-sm lg:text-md text-primaryBlack font-medium">Justin Bergson</p>
                        <p className="text-sm text-primaryGray">Justin@gmail.com</p>
                    </div>

                    <img src={checronDownIcon} />
                </div>


            </div>

            <div className="relative lg:hidden block">
                <img src={avatarIcon} onClick={toggleDropdown} className="block lg:hidden cursor-pointer" />

                <div ref={dropdownRef} className={`z-30 absolute bg-white text-gray-800 top-12 rounded-md shadow-md right-0 w-56 ${dropdownVisibility}`}>
                    <div className="p-3 text-center">
                        <p className="text-sm lg:text-md text-primaryBlack font-medium">Justin Bergson</p>
                        <p className="text-sm text-primaryGray">Justin@gmail.com</p>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-3 p-3 text-sm ">
                        <img src={calenderIcon} />
                        <p className="font-inter text-primaryBlack">November 15, 2023</p>
                    </div>

                </div>



            </div>
        </nav>
    )
}

export default Navbar;