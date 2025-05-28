

function Filter(){
    
    
    return(
        <>
            <div>
                <div>
                    <i></i>
                    <p></p>
                </div>

                <ul>
                    <p>Theo Danh Mục</p>
                    <li></li>
                </ul>

                <ul>
                    <p>Nơi Bán</p>
                    <li></li>
                </ul>

                <ul>
                    <p>Đơn Vị Vận Chuyển</p>
                    <li>Hỏa Tốc</li>
                    <li>Nhanh</li>
                    <li>Tiết Kiệm</li>
                </ul>

                <ul>
                    <p>Thương Hiệu</p>
                    <li></li>
                </ul>

                <div>
                    <p>Khoảng Giá</p>
                    <div>
                        <input></input>
                        <span></span>
                        <input></input>
                    </div>
                    <button></button>
                </div>

                <ul>
                    <p>Loại Shop</p>
                    <li>Shopee Mall</li>
                    <li>Shop Yêu thích</li>
                    <li>Xử lý đơn hàng bởi Shopee</li>
                </ul>


                <ul>
                    <p>Tình Trạng</p>
                    <li>Đã sử dụng</li>
                    <li>Mới</li>
                </ul>

                <ul>
                    <p>Đánh Giá</p>
                    <li>
                        {/*for loop for 5 stars*/}
                    </li>
                </ul>

                <ul>
                    <p>Dịch Vụ & Khuyến Mãi</p>
                    <li>Đang giảm giá</li>
                    <li>Hàng có sẵn</li>
                    <li>Mua giá bán buôn/ bán sỉ</li>
                    <li>Gì Cũng Rẻ</li>
                </ul>

                <button className="pl-5 pr-5 pt-1 pb-1 text-white text-xl bg-orange-400">XÓA TẤT CẢ</button>
            </div>
        </>
    );
}

export default Filter;