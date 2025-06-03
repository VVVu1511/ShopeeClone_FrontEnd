import React from 'react';

function ProductCard({product}){
    return (
        <>
            <div className="duration-100 border-2 border-gray-200 hover:border-red-400 cursor-pointer">
            
                <img src="https://c1.staticflickr.com/7/6088/6082469805_d0ee5c523a_o.jpg"
                    className="h-64"></img>


                <div className="mt-5 pl-5 pr-5 pb-5">
                    <p className="text-base"><span class="text-xs text-white bg-red-400 p-1 pt-0.5 pb-0.5 rounded-md">Yêu thích</span>{product.name}</p>

                <div className="text-red-300 flex mt-3">
                    <p className="mt-1 underline-offset-1">đ</p>
                    <p className="ml-1 text-2xl">10.000</p>
                    <span className="text-xs mt-2 ml-1 h-5 bg-red-100 p-0.5 pl-1.5 pr-1.5 rounded-md">-50%</span>
                </div>

                <div className="mt-3 border-2 border-red-300 text-red-300 w-32 text-xl text-center">Rẻ Vô Địch</div>

                <div className="mt-3 flex">
                    <i className="mt-2 text-yellow-400 fa-solid fa-star"></i>
                    <p className="mt-1 ml-1 font-medium text-sm">4.7</p>
                </div>

                <div className="mt-3 flex">
                    <i className="text-gray-300 mt-2 fa-solid fa-location-dot"></i>
                    <p className="mt-1 ml-1 text-gray-500 text-sm">Hải Dương</p>
                </div>
                </div>
            
            
            </div>
        </>
    );
}

export default ProductCard;