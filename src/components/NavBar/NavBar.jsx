import style from './NavBar.module.css'
import { Separator } from '../Footer/Footer'

function smallText(text){
    return <p className="mr-1 hover:opacity-80 cursor-pointer">
        {text}
    </p>;
}

function NavBar(){
    return (
        <>
        <div className="flex justify-center bg-orange-500">
            <div className="w-[55%]">
                <div className="flex justify-between text-white">
                    <div className="flex pt-1 pl-7 text-xs space-x-1.5">
                        {smallText("Kênh người bán")}
                        <Separator />
                        {smallText("Trở thành Người bán Shopee")}
                        <Separator />
                        {smallText("Tải ứng dụng")}
                        <Separator />
                        {smallText("Kết nối")}
                        <i class="cursor-pointer mt-1 fa-brands fa-facebook"></i>
                        <i class="cursor-pointer mt-1 fa-brands fa-instagram"></i>
                    </div>

                    <div className="flex pt-1 pr-7 text-xs space-x-1.5">
                        <i class="cursor-pointer mt-1 fa-solid fa-bell"></i>
                        <p className="hover:opacity-80 cursor-pointer">Thông báo</p>

                        <i class="cursor-pointer mt-1 fa-solid fa-circle-question"></i>
                        <p className="hover:opacity-80 cursor-pointer">Hỗ Trợ</p>

                        <i class="cursor-pointer mt-1 fa-solid fa-globe"></i>
                        
                        {smallText("Tiếng Việt")}

                        {smallText("Đăng ký")}
                        <Separator />

                        {smallText("Đăng nhập")}
                    </div>

                </div>

                <div class="flex pl-5 pb-5 pt-2">
                    <img src="./images/logo.png" className="w-1/6 h-16 mr-5">
                    </img>

                    <div className="rounded-md bg-white pt-1 pr-1 pb-1 h-10 w-4/6 place-content-between mt-5">
                        <div className="pl-5">
                            <input type="text" className="w-11/12" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"></input>
                            <button className="text-white hover:opacity-70 w-1/12 rounded-md bg-orange-600 pl-5 pr-5 pt-1 pb-1">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>

                        </div>

                        <div className={`space-x-3 flex mt-2 ${style.text_under_search_bar} text-white`}>
                            {smallText("Máy Quạt Cầm Tay")}
                            {smallText("Áo Phông Đẹp")}
                            {smallText("Sale 1k Điện Thoại iPhone")}
                            {smallText("Son Bóng Chính Hãng")}
                            {smallText("Dép")}
                            {smallText("Áo Kiểu Babydoll")}
                            {smallText("Vòng 4 Lá Bạc")}
                            {smallText("Chắn Bùn Cnc")}
                        </div>
                    </div>

                    <div className="w-1/6 pl-16">
                        <i class="mt-7 text-white text-2xl fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>
    );
}

export default NavBar;