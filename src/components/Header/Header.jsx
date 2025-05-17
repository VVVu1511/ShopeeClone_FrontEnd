
import style from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className="style.header">
                <div className="style.grid">
                    <nav className="style.header__navbar">
                        <ul className="style.header__navbar-list">
                            <li className="style.header__navbar-item header__navbar-item--separate">
                                Vào cửa hàng trên ứng dụng
                                <div className="style.header__bridge"></div>

                                <div className="style.header__qr">
                                    <img src="./assets/img/qr.png" alt="QR code" className="style.header__qr-img" />
                                    <div className="style.header__qr-apps">
                                        <img src="./assets/img/google.png" alt="Google" className="style.header__qr-download-img" />
                                        <img src="./assets/img/appstore.png" alt="Appstore" className="style.header__qr-download-img" />
                                    </div>
                                </div>
                            </li>

                            <li className="style.header__navbar-item">
                                Kết nối
                                <a href="#" className="style.header__navbar-icon-link">
                                    <i className="style.fa-brands fa-facebook header__navbar-icon"></i>
                                </a>
                                <a href="#" className="style.header__navbar-icon-link">
                                    <i className="style.fa-brands fa-instagram header__navbar-icon"></i>
                                </a>
                            </li>
                        </ul>

                        <ul className="style.header__navbar-list">
                            <li className="style.header__navbar-item">
                                <a href="#" className="style.header__navbar-item-link">
                                    <i className="style.fa-solid fa-bell header__navbar-icon"></i>
                                    Thông báo
                                </a>

                                <div className="style.header__bridge2"></div>

                                <div className="style.header__notify">
                                    <header className="style.header__notify-header">
                                        <h3>Thông báo mới nhận</h3>
                                    </header>

                                    <ul className="style.header__notify-list">
                                        <li className="style.header__notify-item">
                                            <a href="#" className="style.header__notify-link">
                                                <img src="./assets/img/asuslap.webp" alt="" className="style.header__notify-img" />
                                                <div className="style.header__notify-info">
                                                    <span className="style.header__notify-name">Laptop Asus Tuf Gaming</span>
                                                    <span className="style.header__notify-description">Hiệu năng siêu đỉnh</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style.header__notify-item">
                                            <a href="#" className="style.header__notify-link">
                                                <img src="./assets/img/asuslap.webp" alt="" className="style.header__notify-img" />
                                                <div className="style.header__notify-info">
                                                    <span className="style.header__notify-name">Iphone 16</span>
                                                    <span className="style.header__notify-description">Điện thoại chụp ảnh tốt nhất</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="style.header__notify-item">
                                            <a href="#" className="style.header__notify-link">
                                                <img src="./assets/img/iphone.webp" alt="" className="style.header__notify-img" />
                                                <div className="style.header__notify-info">
                                                    <span className="style.header__notify-name">Iphone 16</span>
                                                    <span className="style.header__notify-description">Điện thoại chụp ảnh tốt nhất</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    <footer className="style.footer__seeAll">
                                        <a href="#" className="style.footer__seeAll-title">Xem tất cả</a>
                                    </footer>
                                </div>
                            </li>

                            <li className="style.header__navbar-item">
                                <a href="#" className="style.header__navbar-item-link">
                                    <i className="style.fa-regular fa-circle-question header__navbar-icon"></i>
                                    Trợ giúp
                                </a>
                            </li>

                            <li className="style.header__navbar-item header__navbar-item--bold header__navbar-item--separate header__navbar-item-register">
                                Đăng ký
                            </li>
                            <li className="style.header__navbar-item header__navbar-item--bold header__navbar-item-login">
                                Đăng nhập
                            </li>

                            <li className="style.header__navbar-item header__navbar-user">
                                <img src="./assets/img/k520.jpg" alt="" className="style.header__navbar-user-img" />
                                <span className="style.header__navbar-user-name">Van Vu</span>

                                <ul className="style.header__navbar-user-menu">
                                    <li className="style.header__navbar-user-item">
                                        <a href="#">Tài khoản của tôi</a>
                                    </li>
                                    <li className="style.header__navbar-user-item">
                                        <a href="#">Địa chỉ của tôi</a>
                                    </li>
                                    <li className="style.header__navbar-user-item">
                                        <a href="#">Đơn mua</a>
                                    </li>
                                    <li className="style.header__navbar-user-item header__navbar-user-item-logout">
                                        <a href="#">Đăng xuất</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/* Header with search */}
                    <div className="style.header-with-search">
                        <div className="style.header__logo">
                            {/* SVG logo có thể giữ nguyên hoặc đưa vào component riêng nếu dài */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
