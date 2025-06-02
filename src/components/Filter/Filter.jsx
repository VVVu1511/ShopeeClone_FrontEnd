
function Filter(){
    const drawStars = (number_of_yellow, number_of_white) => {
        return [Array.from({length:number_of_yellow}).map((_,i) => (
                                <i class="fa-solid fa-star text-yellow-400"></i>
        )) , Array.from({length:number_of_white}).map((_,i) => (
                                <i class="fa-solid fa-star text-gray-100"></i>
        ))]; 
    }

    const seperator = () => {
        return <span className="bg-gray-100 h-0.5 w-48 block"></span>;
    }
    
    const checkBox = (text) => {
        return <>
            <li className="flex space-x-2 cursor-pointer">
                <input className="cursor-pointer" type="checkbox"></input>
                <p>{text}</p>
            </li>
        </>;
    }

    return(
        <>
            <div className="w-[10%] w-1/6 pl-5 space-y-5">
                <div className="flex pt-5">
                    <i class="mt-2 fa-solid fa-filter"></i>
                    <p className="ml-2 font-bold text-black text-xl">BỘ LỌC TÌM KIẾM</p>
                </div>

                <ul>
                    <p>Theo Danh Mục</p>
                    {checkBox("Máy điều hòa (8k+)")}
                    {checkBox("Quạt (4k+)")}
                </ul>

                {seperator()}

                <ul>
                    <p>Nơi Bán</p>
                    {checkBox("Hà Nội")}
                    {checkBox("TP.Hồ Chí Minh")}
                </ul>

                {seperator()}

                <ul>    
                    <p>Đơn Vị Vận Chuyển</p>
                    {checkBox("Hỏa Tốc")}
                    {checkBox("Nhanh")}
                    {checkBox("Tiết Kiệm")}
                </ul>

                {seperator()}

                <ul>
                    <p>Thương Hiệu</p>
                    {checkBox("SUNHOUSE")}
                    {checkBox("Daikiosan")}
                    {checkBox("BOSS")}
                </ul>

                {seperator()}

                <div className="space-y-5">
                    <p>Khoảng Giá</p>
                    <div className="flex space-x-2.5">
                        <input className="focus:outline-none pl-1 pt-1 pb-1 border-2 border-gray-300 w-1/3 text-xs" placeholder="đ TỪ"></input>
                        <span className="mt-3 w-3 bg-gray-300 h-0.5"></span>
                        <input className="focus:outline-none pl-1 pt-1 pb-1 border-2 border-gray-300 w-1/3 text-xs" placeholder="đ ĐẾN"></input>
                    </div>
                    <button className="w-48 pl-12 pr-12 pt-1 pb-1 text-white text-sm bg-orange-500">ÁP DỤNG</button>
                </div>

                {seperator()}

                <ul>
                    <p>Loại Shop</p>
                    {checkBox("Shopee Mall")}
                    {checkBox("Shop Yêu thích")}
                </ul>

                {seperator()}

                <ul>
                    <p>Tình Trạng</p>
                    {checkBox("Đã sử dụng")}
                    {checkBox("Mới")}
                </ul>

                {seperator()}

                <ul>
                    <p>Đánh Giá</p>
                    <li className="flex">{drawStars(5,0)}</li>
                    <li className="flex">{drawStars(4,1)}</li>
                    <li className="flex">{drawStars(3,2)}</li>
                    <li className="flex">{drawStars(2,3)}</li>
                    <li className="flex">{drawStars(1,4)}</li>
                </ul>

                {seperator()}

                <ul>
                    <p>Dịch Vụ & Khuyến Mãi</p>
                    {checkBox("Đang giảm giá")}
                    {checkBox("Hàng có sẵn")}
                    {checkBox("Mua giá bán buôn/ bán sỉ")}
                    {checkBox("Gì Cũng Rẻ")}
                </ul>
                
                {seperator()}

                <button className="w-48 pl-12 pr-12 pt-1 pb-1 text-white text-sm bg-orange-500">XÓA TẤT CẢ</button>
            </div>
        </>
    );
}

export default Filter;