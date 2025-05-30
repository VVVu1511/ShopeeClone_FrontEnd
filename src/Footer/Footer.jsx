

function Footer(){
    function separator(){
        return <p className="opacity-20">|</p>
    }
    
    function logo(img,w=10,h=11){
        const width = `w-${w}`;
        const height = `w-${h}`;

        return <img src = {img} className={`${width} ${height}`}></img>
    }

    function brand(){
        return "mt-3 flex space-x-2";
    }

    return (
        <>
            <hr className="h-1.5 bg-orange-600"></hr>
            
            <div className="flex pt-10 text-sm">
                <div className="pl-10 space-y-2 mb-10">
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
                    <div className="flex space-x-2">
                        {logo("./images/visa.jpeg",24,24)}
                        <div className="mt-6">
                            {[...Array(3)].map((_,i) => (
                                logo("./images/visa.jpeg",28,7)   
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <hr className=""></hr>

            <div className="mt-10 pl-10 flex space-x-10">
                <div className="flex space-x-2">
                    <p>© 2025 Shopee.</p>
                    <p>Tất cả các quyền được bảo lưu.</p>
                </div>

                <div className="flex space-x-1">
                    <p>Quốc gia & Khu vực:</p>
                    <p>Singapore</p>
                    {separator()}
                    <p>Indonesia</p>
                    {separator()}
                    <p>Thái Lan</p>
                    {separator()}
                    <p>Malaysia</p>
                    {separator()}
                    <p>Việt Nam</p>
                    {separator()}
                    <p>Philippines</p>
                    {separator()}
                    <p>Brazil</p>
                    {separator()}
                    <p>México</p>
                    {separator()}
                    <p>Colombia</p>
                    {separator()}
                    <p>Chile</p>
                    {separator()}
                    <p>Đài Loan</p>
                </div>
            </div>

            <div className="text-sm pt-10 pb-10 pl-10 pr-10 mt-10 bg-gray-100 text-center">
                <div className="space-x-5 flex justify-center">
                    <p className="uppercase">Chính sách bảo mật</p>
                    {separator()}
                    <p className="uppercase">Quy chế hoạt động</p>
                    {separator()}
                    <p className="uppercase">Chính sách vận chuyển</p>
                    {separator()}
                    <p>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
                </div>

                <div className="mt-10">

                </div>

                <p>Công ty TNHH Shopee</p>
                <p className="pt-5">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp</p>
                <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
                <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                <span className="bg-gray-400">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
            </div>
        </>
    );
}

export default Footer;