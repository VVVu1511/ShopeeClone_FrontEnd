

function NavBar(){
    return (
        <>
        <div className="bg-orange-500">
            <div>

            </div>

            <div class="flex">
                <img src="./images/logo.png" className="w-1/6 h-20">
                </img>

                <div className="bg-white pl-5 pt-1 pr-1 pb-1 h-10 w-4/6 place-content-between mt-5">
                    <input type="text" className="w-5/6" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"></input>
                    <button className="w-1/6 rounded-sm bg-orange-600 pl-5 pr-5 pt-1 pb-1">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="w-1/6 pl-32">
                    <i class="mt-7 text-gray-500 text-2xl fa-solid fa-cart-shopping"></i>
                </div>
            </div>

            <div class="flex text-black">
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
        
        
        </>
    );
}

export default NavBar;