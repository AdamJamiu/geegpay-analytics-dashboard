import searchIcon from "/search-icon.svg"
import calenderIcon from "/solar_calendar-linear.svg"
import bellIcon from "/bell.svg"
import avatarIcon from '/justin-bergson.png'
import checronDownIcon from '/chevron-down.svg'

const Navbar = () => {
    return (
        <nav className="bg-[#F7F8FA] w-full border-b-[#EBECF2] border md:pl-28 py-4 pr-5 flex flex-row justify-between items-center">
            <h2 className="font-semibold text-xl font-plus-jakarta-sans text-primaryBlack">Dashboard</h2>

            <div className="flex flex-row justify-between items-center gap-5">
                <div className="relative">
                    <input placeholder="Search..." className="rounded-full border border-b-[#EBECF2] pl-10 py-3 bg-white w-[349px]" />
                    <img src={searchIcon} className="absolute left-4 top-4" />
                </div>

                <div className="flex flex-row justify-start items-center gap-3">
                    <img src={calenderIcon} />
                    <p className="font-medium font-inter text-sm text-primaryBlack">November 15, 2023</p>
                </div>

                <div className="p-2 rounded-full border border-[#DADDDD]">
                    <img src={bellIcon} />
                </div>

                <div className="p-2 rounded-full border border-[#DADDDD] flex flex-row justify-start items-center gap-4 font-inter cursor-pointer hover:bg-white ease transition-all">
                    <img src={avatarIcon} />

                    <div className="">
                        <p className="text-md text-primaryBlack">Justin Bergson</p>
                        <p className="text-sm text-primaryGray">Justin@gmail.com</p>
                    </div>

                    <img src={checronDownIcon} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;