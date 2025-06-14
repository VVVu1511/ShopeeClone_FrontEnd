import React, { useRef, useState } from 'react';
import { drawStars } from '../Filter/Filter';
import { Separator } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function ProductInformation({token,cartProducts,setCartProducts}){
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);

    const changeQuantity = async(amount) => {
        if(quantity + amount < 0) return;

        setQuantity(quantity + amount);
    }

    const handleAddingIntoCart = async() => {
        if(!token){
            navigate("/login");
        }
        
        setCartProducts(cartProducts.append())//newproduct));
        alert("success");
    }   


    return (
        <div className='w-full space-y-2 bg-gray-100 p-5'>
            <div className='justify-center flex w-full p-2 space-x-3 bg-white'>
                <img src='images/laptop_1.jpg'></img>
                <div className='space-y-3'>
                    <p>Kệ Tủ Mini Ngăn Kéo Để Bàn Đựng Đồ Tay Cầm Thỏ Bunny Desk</p>
                    <div className='flex place-content-between'>
                        <div className='space-x-2 flex'>
                            <p className='underline'>4.7</p>
                            <div>
                                {drawStars(5,0)}
                            </div>
                            {Separator()}        
                            <p className='underline'>155</p>
                            <p>Đánh Giá</p>
                        </div>
                        <div>
                            <p>Tố cáo</p>
                        </div>
                    </div>
                    
                    <div className='p-3 flex bg-gray-50 space-x-2'>
                        <p className='text-orange-500 text-3xl'>₫57.600</p>
                        <p className='mt-2'>₫57.600 - ₫96.000</p>
                    </div>

                    <div className='flex space-x-7'>
                        <p>Vận Chuyển</p>
                        <div>
                            <div className='flex space-x-2'>
                                <i className="text-green-300 fa-solid fa-truck mt-1.5"></i>
                                <p>Nhận từ 15 Th06 - 17 Th06, phí giao ₫0</p>
                                <i class="fa-solid fa-arrow-right mt-1.5"></i>
                            </div>
                            <p className='ml-7 text-sm'>Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</p>
                        </div>
                    </div>

                    <div className='flex space-x-7'>
                        <p>An tâm mua sắm cùng Shopee</p>
                        <div className='flex space-x-2'>
                            <i className="fa-solid fa-check mt-1.5"></i>
                            <p>Trả hàng miễn phí 15 ngày</p>
                            <i className="fa-solid fa-caret-down mt-1.5"></i>
                        </div>
                    </div>

                    <div>
                        <p>Size</p>

                    </div>

                    <div className='flex space-x-7'>
                        <p>Số Lượng</p>
                        
                        <div className='flex'>
                            <div onClick={() => changeQuantity(-1)} className='cursor-pointer p-1 border-2 border-gray-200'>-</div>
                            <div className='p-1 border-2 border-gray-200'>{quantity}</div>
                            <div onClick={() => changeQuantity(1)} className='cursor-pointer p-1 border-2 border-gray-200'>+</div>
                        </div>
                    </div>

                    <div className='flex space-x-2'>
                        <div onClick={() => handleAddingIntoCart} className=' hover:brightness-105 cursor-pointer space-x-2 text-orange-500 flex bg-red-100 pt-2 pb-2 pl-3 pr-3'>
                            <i class="mt-1.5 fa-solid fa-cart-plus"></i>
                            <p>Thêm Vào Giỏ Hàng</p>
                        </div>
                        <div className='hover:brightness-105 bg-orange-600 cursor-pointer text-white pt-2 pb-2 pl-12 pr-12'>
                            Mua Ngay
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex">
                    <p></p>
                    
                    <div></div>
                    <div></div>

                    <p></p>
                </div>

                <ul className="flex">
                    <li></li>
                </ul>
            </div>

            <div className="flex space-x-4">
                <img className='rounded-full' src='images/logo_1.webp'></img>
                <div>
                    <p>VuStore</p>
                    <p>Online bay gio</p>
                    <div className="flex space-x-2">
                        <div className='border-2 border-gray-200'>Chat Ngay</div>
                        <div className='border-2 border-gray-200'>Xem Shop</div>
                    </div>
                </div>

                {Separator()}
                
                <div className='space-y-3'>
                    <div className="flex space-x-12">
                        <p>Danh Gia</p>
                        <p>2,8k</p>
                    </div>

                    <div className="flex space-x-12">
                        <p>San pham</p>
                        <p>44</p>
                    </div>
                </div>

                <div>
                    <div className="flex">
                        <p>Tỉ lệ phản hồi</p>
                        <p>100%</p>
                    </div>

                    <div className="flex">
                        <p>Thời gian phản hồi</p>
                        <p>trong vài giờ</p>
                    </div>
                </div>

                <div>
                    <div className="flex">
                        <p>Tham gia</p>
                        <p>3 năm trước</p>
                    </div>

                    <div className="flex">
                        <p>Người Theo Dõi</p>
                        <p>4,8k</p>
                    </div>
                </div>

            </div>

            <div className="p-5">
                <div className="bg-gray-100 p-2">CHI TIẾT SẢN PHẨM</div>

                <ul>
                    <li></li>
                </ul>

                <div className="bg-gray-100 p-2">MÔ TẢ SẢN PHẨM</div>

                <ul>
                    <li></li>
                </ul>

            </div>

            <div className="p-5">
                <p>ĐÁNH GIÁ SẢN PHẨM</p>

                <div className="flex">
                    <div>
                        <p></p>
                        {/* 5star */}
                        <i></i> 
                    </div>

                    <div>
                        {/* 8 types */}
                        <div></div>
                    </div>
                </div>

                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductInformation;