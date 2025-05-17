import style from './Modal.module.css';
import classNames from 'classnames';

export default function Modal() {
    return (
        <div className={style.modal}>
            <div className={style.modal__overlay}></div>

            <div className={style.modal__body}>
                {/* Form Đăng ký */}
                <div className={classNames(style.auth_form, style.auth_form_register)}>
                    <div className={style.auth_form__container}>
                        <div className={style.auth_form__header}>
                            <h3 className={style.auth_form__heading}>Đăng ký</h3>
                            <span className={style.auth_form__switch_btn}>Đăng nhập</span>
                        </div>

                        <div className={style.auth_form__form}>
                            <div className={style.auth_form__group}>
                                <input type="text" className={style.auth_form__input} placeholder="Email của bạn" />
                            </div>

                            <div className={style.auth_form__group}>
                                <input type="password" className={style.auth_form__input} placeholder="Mật khẩu của bạn" />
                            </div>

                            <div className={style.auth_form__group}>
                                <input type="password" className={style.auth_form__input} placeholder="Nhập lại mật khẩu" />
                            </div>
                        </div>

                        <div className={style.auth_form__aside}>
                            <p className={style.auth_form__policy_text}>
                                Bằng việc đăng ký, bạn đã đồng ý với Shopee về&nbsp;
                                <a className={style.auth_form__policy_link}>Điều khoản dịch vụ</a> &
                                <a className={style.auth_form__policy_link}>Chính sách bảo mật</a>
                            </p>
                        </div>

                        <div className={style.auth_form__controls}>
                            <button className={classNames(style.btn, style.auth_form__controls_back)}>TRỞ LẠI</button>
                            <button className={classNames(style.btn, style.btn__primary, style.btn__disabled)}>ĐĂNG KÝ</button>
                        </div>
                    </div>

                    <div className={style.auth_form__socials}>
                        <a href="#" className={classNames(style.btn, style.btn__with_icon, style.facebook)}>
                            <i className="fab fa-facebook-square"></i>
                            <span className={style.auth_form__facebook__connect}>Kết nối với Facebook</span>
                        </a>

                        <a href="#" className={classNames(style.btn, style.btn__size_s, style.btn__with_icon, style.google)}>
                            <i className="fab fa-google"></i>
                            <span className={style.auth_form__google__connect}>Kết nối với Google</span>
                        </a>
                    </div>
                </div>

                {/* Form Đăng nhập */}
                <div className={classNames(style.auth_form, style.auth_form_login)}>
                    <div className={style.auth_form__container}>
                        <div className={style.auth_form__header}>
                            <h3 className={style.auth_form__heading}>Đăng nhập</h3>
                            <span className={style.auth_form__switch_btn}>Đăng ký</span>
                        </div>

                        <div className={style.auth_form__form}>
                            <div className={style.auth_form__group}>
                                <input type="text" className={style.auth_form__input} placeholder="Email của bạn" />
                            </div>

                            <div className={style.auth_form__group}>
                                <input type="password" className={style.auth_form__input} placeholder="Mật khẩu của bạn" />
                            </div>
                        </div>

                        <div className={style.auth_form__aside}>
                            <div className={style.auth_form__help}>
                                <a href="#" className={classNames(style.auth_form__help_link, style.auth_form__help_link__password)}>Quên mật khẩu</a>
                                <span className={style.auth_form__seperate}></span>
                                <a href="#" className={style.auth_form__help_link}>Cần trợ giúp?</a>
                            </div>
                        </div>

                        <div className={style.auth_form__controls}>
                            <button className={classNames(style.btn, style.auth_form__controls_back)}>TRỞ LẠI</button>
                            <button className={classNames(style.btn, style.btn__primary, style.btn__disabled)}>ĐĂNG NHẬP</button>
                        </div>
                    </div>

                    <div className={style.auth_form__socials}>
                        <a href="#" className={classNames(style.btn, style.btn__with_icon, style.facebook)}>
                            <i className="fab fa-facebook-square"></i>
                            <span className={style.auth_form__facebook__connect}>Kết nối với Facebook</span>
                        </a>

                        <a href="#" className={classNames(style.btn, style.btn__size_s, style.btn__with_icon, style.google)}>
                            <i className="fab fa-google"></i>
                            <span className={style.auth_form__google__connect}>Kết nối với Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
