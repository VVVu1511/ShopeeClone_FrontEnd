
function ProductGrid(){
    return (
        <>
            <div className="pl-2 pt-5">
                <div className="flex space-x-2">
                    <i class="mt-1.5 fa-solid fa-lightbulb"></i>
                    <p>Kết quả tìm kiếm cho từ khoá </p>
                    <p className="text-orange-500">'ốp đẹp'</p>
                </div>

                <div className="bg-gray-200 w-full">
                    <ul className="flex space-x-2">
                        {/* pt-2 pb-2 pl-5 pr-5 bg-white active:bg-orange-500 */}
                        <li>Sắp xếp theo</li>
                        <li>Liên Quan</li>
                        <li>Mới Nhất</li>
                        <li>Bán Chạy</li>
                        <li className="flex space-x-12">
                            <p>Giá</p>
                            <i class="fa-solid fa-arrow-down"></i>
                        </li>
                        <li>1/17</li>
                        <li>
                            <i class="fa-solid fa-arrow-left"></i>
                            <i class="fa-solid fa-arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductGrid;