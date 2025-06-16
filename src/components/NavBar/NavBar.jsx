import style from './NavBar.module.css'
import { Separator } from '../Footer/Footer'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SmallText({text, onClick=null}){
    return <p onClick={onClick} className="mr-1 hover:opacity-80 cursor-pointer">
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


function NavBar({token,setProducts}){
    const example = ["A", "AA", "BB", "AAC"];
    
    const [showQR, setShowQR] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [isSearching, setIsSearching] = useState(false);    
    const [searchItems, setSearchItems] = useState([]);
    const input = useRef(null);
    const navigate = useNavigate();

    const seeCart = async() => {
        navigate("/cart");
    }

    // async function getProductsByName(){
    //     const response = await fetch(`http://localhost:8080/shop/products/${input}`,{
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         },
    //     });

    //     const data = response.json();

    //     setProducts(data.result.map(d => d.name));
    // }

    const handleInputChange = (e) => {
        const value = e.target.value;
        
        if(value == "") setSearchItems([]);

        else setSearchItems(example.filter(item => item.startsWith(value)));
    }

    const handleSearchItemClick = (e) => {
        navigate(`/product_page/${e.textContent}`);
    }

    const searching = async() => {
        navigate(`/product_page/product_name/${input.current.value}`);
    }

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
                        <SmallText text="Kênh người bán" />
                        <Separator />
                        <SmallText text="Trở thành Người bán Shopee" />
                        <Separator />
                        <div onMouseEnter={() => setShowQR(true)}
                            onMouseLeave={() => setShowQR(false)}>
                            <SmallText text="Tải ứng dụng" />
                        </div>
                        <Separator />   
                        <SmallText text="Kết nối" />
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
                            <SmallText text="Tiếng Việt" />
                        </div>

                        <SmallText text="Đăng ký" onClick={() => navigate("/register")} />
                        <Separator />
                        <SmallText text="Đăng nhập" onClick={() => navigate("/login")} />
                    </div>
                </div>

                <div class="flex pl-5 pb-5 pt-2">
                    <img src="./images/logo.png" className="w-1/6 h-16 mr-5">
                    </img>

                    <div className="rounded-md bg-white h-10 w-4/6 place-content-between mt-5">
                        <div className="transition-colors duration-300 border-2 pl-5 focus-within:border-black rounded">
                            <input ref={input} onClick={() => searching()} onChange={handleInputChange} onBlur={() => setIsSearching(false)} onFocus={() => setIsSearching(true)} type="text" className="outline-none w-11/12 h-full flex-grow" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"></input>
                            <button className="text-white hover:opacity-70 w-1/12 rounded-md bg-orange-600 pl-5 pr-5 pt-1 pb-1">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        <ul className={`bg-white cursor-pointer ${isSearching ? 'block': 'hidden'}`}>
                            {
                                searchItems?.map((ele) => {
                                    return <li onClick={handleSearchItemClick} className='hover:bg-gray-100 pl-2 pt-2 pb-2'>{ele}</li>
                                })
                            }
                        </ul>

                        <div className={`space-x-3 flex mt-2 ${style.text_under_search_bar} text-white`}>
                            <SmallText text="Máy Quạt Cầm Tay" />
                            <SmallText text="Áo Phông Đẹp" />
                            <SmallText text="Sale 1k Điện Thoại iPhone" />
                            <SmallText text="Son Bóng Chính Hãng" />
                            <SmallText text="Dép" />
                            <SmallText text="Áo Kiểu Babydoll" />
                            <SmallText text="Vòng 4 Lá Bạc" />
                            <SmallText text="Chắn Bùn Cnc" />
                        </div>
                    </div>

                    <div className="w-1/6 pl-16">
                        <i onClick={() => seeCart()} className="mt-7 text-white text-2xl fa-solid fa-cart-shopping cursor-pointer"></i>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>
    );
}

export default NavBar;