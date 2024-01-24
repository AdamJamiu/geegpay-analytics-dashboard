import marcusBergson from "/marcus-bergson.png"
import jaydonVaccaro from "/jaydon-vacaro.png"
import coreySchleifer from "/corey-schleifer.png"
import cooperPress from "/cooper-press.png"
import phillipLubin from "/phillip-lubin.png"

import downloadBtn from "/document-download.svg"

export const LastFiveOrders = () => {
    return (
        <div className="rounded-xl border border-borderGray p-4 font-plus-jakarta-sans w-full col-span-1 md:col-span-2 bg-white">
            <div className="w-full flex flex-row justify-between items-center font-medium text-lg">
                <h2 className="font-semibold text-neutralGray">Last Orders</h2>
                <p className="text-primaryGreen cursor-pointer hover:underline">See All</p>
            </div>

            <table className="w-full mt-5 font-plus-jakarta-sans">
                <thead>
                    <tr className="text-[#9CA4AB] text-sm border-b font-medium">
                        <td className="pb-4">Name</td>
                        <td className="pb-4">Date</td>
                        <td className="pb-4">Amount</td>
                        <td className="pb-4">Status</td>
                        <td className="pb-4">Invoice</td>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-sm border-b">
                        <td className="p-3 flex flex-row justify-start items-center gap-2">
                            <img src={marcusBergson} />
                            <span className="text-[#3A3F51] font-medium">Marcus Bergson</span>
                        </td>
                        <td className="text-[#737373]">Nov 15, 2023</td>
                        <td className="text-primaryBlue font-medium">$80,000</td>
                        <td className="text-primaryGreen  font-medium">Paid</td>
                        <td className="text-center">
                            <div className="text-primaryBlue font-medium flex flex-row justify-start items-center gap-2 cursor-pointer hover:underline">
                                <img className="" src={downloadBtn} />
                                <span>View</span>
                            </div>
                        </td>
                    </tr>

                    <tr className="text-sm border-b">
                        <td className="p-3 flex flex-row justify-start items-center gap-2">
                            <img src={jaydonVaccaro} />
                            <span className="text-[#3A3F51] font-medium">Jaydon Vaccaro</span>
                        </td>
                        <td className="text-[#737373]">Nov 15, 2023</td>
                        <td className="text-primaryBlue font-medium">$150,000</td>
                        <td className="text-dangerRed font-medium">Refund</td>
                        <td className="text-center">
                            <div className="text-primaryBlue font-medium flex flex-row justify-start items-center gap-2 cursor-pointer hover:underline">
                                <img className="" src={downloadBtn} />
                                <span>View</span>
                            </div>
                        </td>
                    </tr>

                    <tr className="text-sm border-b">
                        <td className="p-3 flex flex-row justify-start items-center gap-2">
                            <img src={coreySchleifer} />
                            <span className="text-[#3A3F51] font-medium">Corey Schleifer</span>
                        </td>
                        <td className="text-[#737373]">Nov 14, 2023</td>
                        <td className="text-primaryBlue font-medium">$87,000</td>
                        <td className="text-primaryGreen font-medium">Paid</td>
                        <td className="text-center">
                            <div className="text-primaryBlue font-medium flex flex-row justify-start items-center gap-2 cursor-pointer hover:underline">
                                <img className="" src={downloadBtn} />
                                <span>View</span>
                            </div>
                        </td>
                    </tr>

                    <tr className="text-sm border-b">
                        <td className="p-3 flex flex-row justify-start items-center gap-2">
                            <img src={cooperPress} />
                            <span className="text-[#3A3F51] font-medium">Cooper Press</span>
                        </td>
                        <td className="text-[#737373]">Nov 14, 2023</td>
                        <td className="text-primaryBlue font-medium">$100,000</td>
                        <td className="text-dangerRed font-medium">Refund</td>
                        <td className="text-center">
                            <div className="text-primaryBlue font-medium flex flex-row justify-start items-center gap-2 cursor-pointer hover:underline">
                                <img className="" src={downloadBtn} />
                                <span>View</span>
                            </div>
                        </td>
                    </tr>

                    <tr className="text-sm border-b">
                        <td className="p-3 flex flex-row justify-start items-center gap-2">
                            <img src={phillipLubin} />
                            <span className="text-[#3A3F51] font-medium">Phillip Lubin</span>
                        </td>
                        <td className="text-[#737373]">Nov 13, 2023</td>
                        <td className="text-primaryBlue font-medium">$78,000</td>
                        <td className="text-primaryGreen font-medium">Paid</td>
                        <td className="text-center">
                            <div className="text-primaryBlue font-medium flex flex-row justify-start items-center gap-2 cursor-pointer hover:underline">
                                <img className="" src={downloadBtn} />
                                <span>View</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LastFiveOrders;