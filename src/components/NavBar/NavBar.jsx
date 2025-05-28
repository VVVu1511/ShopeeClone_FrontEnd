

function NavBar(){
    return (
        <>
        <div className="bg-orange-500">
            <div className="flex justify-between text-white">
                <div className="flex pt-1 pl-7 text-xs space-x-1.5">
                    <p className="hover:opacity-80 cursor-pointer">Kênh người bán</p>
                    <p>Trở thành Người bán Shopee</p>
                    <p>Tải ứng dụng</p>
                    <p>Kết nối</p>
                    <i class="mt-1 fa-brands fa-facebook"></i>
                    <i class="mt-1 fa-brands fa-instagram"></i>
                </div>

                <div className="flex pt-1 pr-7 text-xs space-x-1.5">
                    <i class="mt-1 fa-solid fa-bell"></i>
                    <p>Thông báo</p>

                    <i class="mt-1 fa-solid fa-circle-question"></i>
                    <p>Hỗ Trợ</p>

                    <i class="mt-1 fa-solid fa-globe"></i>
                    <p>Tiếng Việt</p>

                    <p>Đăng ký</p>

                    <p>Đăng nhập</p>
                </div>

            </div>

            <div class="flex pl-5 pb-5 pt-2">
                <img src="./images/logo.png" className="w-1/6 h-16 mr-5">
                </img>

                <div className="bg-white pl-5 pt-1 pr-1 pb-1 h-10 w-4/6 place-content-between mt-5">
                    <input type="text" className="w-11/12" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"></input>
                    <button className="text-white hover:opacity-70 w-1/12 rounded-sm bg-orange-600 pl-5 pr-5 pt-1 pb-1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <div class="flex text-black mt-1 text-xs text-white">
                        <p>Máy Quạt Cầm Tay</p>
                        <p class="ml-3">Áo Phông Đẹp</p>
                        <p class="ml-3">Sale 1k Điện Thoại iPhone</p>
                        <p class="ml-3">Son Bóng Chính Hãng</p>
                        <p class="ml-3">Dép</p>
                        <p class="ml-3">Áo Kiểu Babydoll</p>
                        <p class="ml-3">Vòng 4 Lá Bạc</p>
                        <p class="ml-3">Chắn Bùn Cnc</p>
                    </div>
                </div>

                <div className="w-1/6 pl-16">
                    <i class="mt-7 text-white text-2xl fa-solid fa-cart-shopping"></i>
                </div>
            </div>

        </div>
        
        
        </>
    );
}

export default NavBar;