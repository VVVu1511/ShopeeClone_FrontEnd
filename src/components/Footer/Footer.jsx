import React from 'react';

export function Separator(){
    return <p className="opacity-50">|</p>
}

export default function Footer(){
    
    function logo(img,w="w-10",h="h-11"){
        return <img src = {img} className={`${w} ${h}`}></img>
    }

    function brand(){
        return "mt-3 flex space-x-2";
    }

    return (
        <>
            <hr className="h-1.5 bg-orange-600"></hr>

            <div className="justify-center">
                <div className="pb-10 flex pt-10 text-sm justify-center bg-gray-100">
                    <div className="space-y-2 mb-10">
                        <p className="font-bold">DỊCH VỤ KHÁCH HÀNG</p>
                        <p className="">Trung Tâm Trợ Giúp Shopee</p>
                        <p>Shopee Blog</p>
                        <p>Shopee Mall</p>
                        <p>Hướng Dẫn Mua Hàng/Đặt Hàng</p>
                        <p>Hướng Dẫn Bán Hàng</p>
                        <p>Ví ShopeePay</p>
                        <p>Shopee Xu</p>
                        <p>Đơn Hàng</p>
                        <p>Trả Hàng/Hoàn Tiền</p>
                        <p>Liên Hệ Shopee</p>
                        <p>Chính Sách Bảo Hành</p>
                    </div>

                    <div className="ml-16 space-y-2">
                        <p className="font-bold">SHOPEE VIỆT NAM</p>
                        <p>Về Shopee</p>
                        <p>Tuyển Dụng</p>
                        <p>Điều Khoản Shopee</p>
                        <p>Chính Sách Bảo Mật</p>
                        <p>Shopee Mall</p>
                        <p>Kênh Người Bán</p>
                        <p>Flash Sale</p>
                        <p>Tiếp Thị Liên Kết</p>
                        <p>Liên Hệ Truyền Thông</p>
                    </div>

                    <div className="ml-32">
                        <p className="font-bold">THANH TOÁN</p>
                        <div className="mt-5 flex space-x-2">
                            {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>
                        <div className="flex space-x-2">
                            {[...Array(2)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>

                        <p className="mt-5 font-bold">ĐƠN VỊ VẬN CHUYỂN</p>
                        <div className="mt-5 flex space-x-2">
                            {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg")   
                                ))}
                        </div>
                    </div>

                    <div className="ml-48">
                        <p className="font-bold">THEO DÕI SHOPEE</p>
                        
                        <ul>
                            <li className={brand()}>
                                <i class="mt-1.5 fa-brands fa-facebook"></i>
                                <p>Facebook</p>
                            </li>

                            <li className={brand()}>
                                <i class="mt-1.5 fa-brands fa-instagram"></i>
                                <p>Instagram</p>
                            </li>

                            <li className={brand()}>
                                <i class="mt-1.5 fa-brands fa-linkedin"></i>
                                <p>LinkedIn</p>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-32">
                        <p className="font-bold">TẢI ỨNG DỤNG SHOPEE</p>
                        
                        <div className="box-border pt-6 flex space-x-2 w-48 h-32">
                            {logo("./images/visa.jpeg","w-1/2","h-full")}
                            
                            <div className="h-full w-1/2">
                                {[...Array(3)].map((_,i) => (
                                    logo("./images/visa.jpeg","w-full","h-1/3")   
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mx-auto justify-center"></hr>

                <div className="mt-10 pl-10 flex space-x-10 justify-center">
                    <div className="flex space-x-2">
                        <p>© 2025 Shopee.</p>
                        <p>Tất cả các quyền được bảo lưu.</p>
                    </div>

                    <div className="flex space-x-1">
                        <p>Quốc gia & Khu vực:</p>
                        <p>Singapore</p>
                        {Separator()}
                        <p>Indonesia</p>
                        {Separator()}
                        <p>Thái Lan</p>
                        {Separator()}
                        <p>Malaysia</p>
                        {Separator()}
                        <p>Việt Nam</p>
                        {Separator()}
                        <p>Philippines</p>
                        {Separator()}
                        <p>Brazil</p>
                        {Separator()}
                        <p>México</p>
                        {Separator()}
                        <p>Colombia</p>
                        {Separator()}
                        <p>Chile</p>
                        {Separator()}
                        <p>Đài Loan</p>
                    </div>
                </div>

            </div>  
            
            <div className="text-sm pt-10 pb-9 pl-10 pr-10 mt-10 bg-gray-100 text-center">
                <div className="space-x-5 flex justify-center">
                    <p className="uppercase">Chính sách bảo mật</p>
                    {Separator()}
                    <p className="uppercase">Quy chế hoạt động</p>
                    {Separator()}
                    <p className="uppercase">Chính sách vận chuyển</p>
                    {Separator()}
                    <p>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
                </div>

                <div className="mt-10">

                </div>

                <p>Công ty TNHH Shopee</p>
                <p className="pt-5">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp</p>
                <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
                <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                <span className="">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
            </div>
        </>
    );
}

