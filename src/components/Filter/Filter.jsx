import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Filter({setProducts,token}){
    const product_name = useParams();

    //find filters with that name or related

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
    
    const checkBox = (text, callback) => {
        return <>
            <li className="flex space-x-2 cursor-pointer">
                <input onChange={(e) => {
                    callback(e.target.checked ? text : "");
                }} className="cursor-pointer" type="checkbox"></input>
                <p>{text}</p>
            </li>
        </>;
    }

    const [productType,setProductType] = useState("");
    const [sellLocation,setSellLocation] = useState("");
    const [transportType,setTransportType] = useState("");
    const [brand,setBrand] = useState("");
    const [price,setPrice] = useState("");
    const [shopType,setShopType] = useState("");
    const [status,setStatus] = useState("");
    const [sale,setSale] = useState("");

    useEffect(() => {
        filteredProduct();
    },[productType,sellLocation,transportType,brand,price,shopType,status,sale]);

    const filteredProduct = async() => {
        const response = await fetch("http://localhost:8080/shop/product",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                productType: productType,
                // sellLocation: sellLocation,
                // transportType: transportType,
                // brand: brand,
                // price: price,
                // shopType: shopType,
                // status: status,
                // sale: sale
            })
        });

        const data = await response.json();
        
        console.log(productType);

        console.log(data);

        setProducts(data.result);
    }

    return(
        <>
            <div className="w-[10%] w-1/6 pl-5 space-y-5">
                <div className="flex pt-5">
                    <i className="mt-2 fa-solid fa-filter"></i>
                    <p className="ml-2 font-bold text-black text-xl">BỘ LỌC TÌM KIẾM</p>
                </div>

                <ul>
                    <p>Theo Danh Mục</p>
                    {checkBox("Super Cheap T-Shirt",setProductType)}
                    {checkBox("Quạt (4k+)",setProductType)}
                </ul>

                {seperator()}

                <ul>
                    <p>Nơi Bán</p>
                    {checkBox("Hà Nội",setSellLocation)}
                    {checkBox("TP.Hồ Chí Minh",setSellLocation)}
                </ul>

                {seperator()}

                <ul>    
                    <p>Đơn Vị Vận Chuyển</p>
                    {checkBox("Hỏa Tốc",setTransportType)}
                    {checkBox("Nhanh",setTransportType)}
                    {checkBox("Tiết Kiệm",setTransportType)}
                </ul>

                {seperator()}

                <ul>
                    <p>Thương Hiệu</p>
                    {checkBox("SUNHOUSE",setBrand)}
                    {checkBox("Daikiosan",setBrand)}
                    {checkBox("BOSS",setBrand)}
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
                    {checkBox("Shopee Mall",setShopType)}
                    {checkBox("Shop Yêu thích",setShopType)}
                </ul>

                {seperator()}

                <ul>
                    <p>Tình Trạng</p>
                    {checkBox("Đã sử dụng",setStatus)}
                    {checkBox("Mới",setStatus)}
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
                    {checkBox("Đang giảm giá",setSale)}
                    {checkBox("Hàng có sẵn",setSale)}
                    {checkBox("Mua giá bán buôn/ bán sỉ",setSale)}
                    {checkBox("Gì Cũng Rẻ",setSale)}
                </ul>
                
                {seperator()}

                <button className="w-48 pl-12 pr-12 pt-1 pb-1 text-white text-sm bg-orange-500">XÓA TẤT CẢ</button>
            </div>
        </>
    );
}

export default Filter;