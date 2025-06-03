import style from './NavBar.module.css'
import { Separator } from '../Footer/Footer'
import { useState } from 'react';
import React from 'react';

function smallText(text){
    return <p className="mr-1 hover:opacity-80 cursor-pointer">
        {text}
    </p>;
}

function QR(showQR){
    return <>
        <div className={`${style.QR} absolute p-3 top-8 left-1/2 bg-gray-100 ${showQR ? 'inline-block' : 'hidden'}`}>
            <img src="./images/visa.jpeg" className='h-32 w-32'></img>

            <div className='mt-2 grid grid-cols-2'>
                <img className='w-16 h-5' src="./images/visa.jpeg"></img>
                <img className='w-16 h-5' src="./images/visa.jpeg"></img>
                <img className='w-16 h-5' src="./images/visa.jpeg"></img>
            </div>
        </div>
    </>
}

function Notification(showNotification){
    return <>
        <div className={`${showNotification ? 'block' : 'hidden'} ${style.notification} h-64 absolute clip-notch`}>
            <div className={`${style.notification_first_block} bg-white`}>

            </div>

            <div className='cursor-pointer flex bg-gray-100'>
                <div className='p-2 text-center pl-16 pr-16 pt-2 pb-2'>Đăng ký</div>
                <div className='p-2 text-center pl-16 pr-16 pt-2 pb-2'>Đăng nhập</div>
            </div>
        </div>
    </>
}

function Language(showLanguage){
    const typical_class = 'text-center pl-2 pt-2 pb-2 pr-16';

    return <>
        <div className={`${showLanguage ? 'block' : 'hidden'}  ${style.language} absolute bg-white`}>
            <div className={typical_class}>Tiếng Việt</div>
            <div className={typical_class}>English</div>
        </div>
    </>
}


function NavBar(){
    const [showQR, setShowQR] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    return (
        <>
        <div className="relative flex justify-center bg-orange-500">
            <div className= {`${showNotification ? 'block' : 'hidden'} ${style.sharp_point} absolute border-x-8 border-t-8 border-x-transparent border-t-white transform -translate-x-1/2 top-5 rotate-180`}></div>

            <div className= {`${showLanguage ? 'block' : 'hidden'} ${style.sharp_point2} absolute border-x-8 border-t-8 border-x-transparent border-t-white transform -translate-x-1/2 top-5 rotate-180`}></div>

            {QR(showQR)}

            {Notification(showNotification)}

            {Language(showLanguage)}

            <div className="w-[55%]">
                <div className="flex justify-between text-white">
                    <div className="flex pt-1 pl-7 text-xs space-x-1.5">
                        {smallText("Kênh người bán")}
                        <Separator />
                        {smallText("Trở thành Người bán Shopee")}
                        <Separator />
                        <div onMouseEnter={() => setShowQR(true)}
                            onMouseLeave={() => setShowQR(false)}>
                            {smallText("Tải ứng dụng")}
                        </div>
                        <Separator />   
                        {smallText("Kết nối")}
                        <i className="cursor-pointer mt-1 fa-brands fa-facebook"></i>
                        <i className="cursor-pointer mt-1 fa-brands fa-instagram"></i>
                    </div>

                    <div className="flex pt-1 pr-7 text-xs space-x-1.5">
                        <i className="cursor-pointer mt-1 fa-solid fa-bell"></i>
                        <p className="hover:opacity-80 cursor-pointer"
                            onMouseEnter={() => setShowNotification(true)}
                            onMouseLeave = {() => setShowNotification(false)}
                        >Thông báo</p>

                        <i className="cursor-pointer mt-1 fa-solid fa-circle-question"></i>
                        <p className="hover:opacity-80 cursor-pointer">Hỗ Trợ</p>

                        <i className="cursor-pointer mt-1 fa-solid fa-globe"></i>
                        
                        <div onMouseEnter={() => setShowLanguage(true)}
                            onMouseLeave = {() => setShowLanguage(false)}>
                            {smallText("Tiếng Việt")}
                        </div>

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
                        <i className="mt-7 text-white text-2xl fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>
    );
}

export default NavBar;