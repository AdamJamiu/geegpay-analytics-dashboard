export const SalesTrend = () => {
    return (
        <div className="rounded-xl border shadow-sm border-borderGray p-5 font-plus-jakarta-sans w-full col-span-2 bg-white">
            <div className="w-full flex flex-row justify-between items-center">
                <h2 className="font-semibold text-neutralGray">Sales Trends</h2>

                <div className="flex flex-row justify-start items-center gap-3">
                    <p className="text-sm text-[#3A3F51] font-medium">Sort by: </p>
                    <select defaultValue="weekly" className="rounded-full p-2 border text-sm font-medium">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SalesTrend;