/* import React, { useState } from "react";



function CartProduct({shop,product,voucher,ship}){
    return (
        <>
            <div>
                <div>
                    <div className="mt-1 h-5 w-5 border-gray-200 border-2"></div>
                    <p>{shop.name}</p>
                </div>

                <div>
                    <img src = {product.picture}></img>
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <p>Số Lượng</p>
                    <div className='flex'>
                        <div onClick={() => changeQuantity(-1)} className='cursor-pointer p-1 border-2 border-gray-200'>-</div>
                        <div className='p-1 border-2 border-gray-200'>{quantity}</div>
                        <div onClick={() => changeQuantity(1)} className='cursor-pointer p-1 border-2 border-gray-200'>+</div>
                    </div>

                    <p>{product.price * product.quantity}</p>
                    <div>
                        <p>Xóa</p>
                        <p>Tìm sản phẩm tương tự</p>
                    </div>

                </div>

                <div></div> 

                <div></div>

            </div>
        </>
    );
}

function Cart({token, cartProducts}){
    return (
        <>
            <div className="bg-gray-100 pl-4 pr-4 pt-2 pb-2">
                <div className="flex place-content-between bg-white pl-12 pr-12 pt-3 pb-3">
                    <div className="flex space-x-5">
                        <div className="mt-1 h-5 w-5 bg-gray-200"></div>
                        <div>Sản Phẩm</div>
                    </div>

                    <div className="flex space-x-16">
                        <p>Đơn Giá</p>
                        <p>Số Lượng</p>
                        <p>Số Tiền</p>
                        <p>Thao Tác</p>
                    </div>
                </div>

                <ul>

                    {cartProducts.map((ele) => {
                        <CartProduct />
                    })}
                </ul>
            </div>
        </>
    );
}

export default Cart;  */