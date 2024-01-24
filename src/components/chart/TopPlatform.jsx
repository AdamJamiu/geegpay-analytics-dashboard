const TopPlatform = () => {
    return (
        <div className="rounded-lg border-borderGray p-5 g-white shadow-sm bg-white text-lg">
            <div className="w-full flex flex-row justify-between items-center font-medium">
                <h2 className="font-semibold  text-neutralGray">Top Platform</h2>
                <p className="text-primaryGreen cursor-pointer hover:underline">See All</p>

            </div>
            {/* Book Bazaar */}
            <div className="my-5 text-appBlack">
                <p className="font-semibold text-neutralGray">Book Bazaar</p>

                <div className="bg-appGrey rounded-full w-full my-4">
                    <div className="w-[50%] p-1 rounded-full bg-appPurple"></div>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-neutralGray"> $2,500,000</p>
                    <p className="text-neutralGray">+15%</p>
                </div>
            </div>

            {/*Artisan Aisle  */}
            <div className="my-5 text-appBlack">
                <p className="font-semibold text-neutralGray">Artisan Aisle</p>

                <div className="bg-appGrey rounded-full w-full my-4">
                    <div className="w-[40%] p-1 rounded-full bg-appCyan"></div>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-neutralGray"> $1,800,000</p>
                    <p className="text-neutralGray">+10%</p>
                </div>
            </div>

            {/* Toy Troop */}
            <div className="my-5 text-appBlack">
                <p className="font-semibold text-neutralGray">Toy Troop</p>

                <div className="bg-appGrey rounded-full w-full my-4">
                    <div className="w-[25%] p-1 rounded-full bg-appOrange"></div>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-neutralGray"> $1,200,000</p>
                    <p className="text-neutralGray">+8%</p>
                </div>
            </div>
        </div>
    )
}

export default TopPlatform;