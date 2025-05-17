export default function Container(){
    return (
        <div className="style.container">
            
                <div className="style.grid__row app__content">
                    <div className="style.grid__column-2">
                        
                        <nav className = "style.category">
                    
                            <h3 className="style.category__heading">
                                <i className="style.fas fa-list category__heading-icon"></i>
                                DANH MỤC
                            </h3>
                            
                            <ul className="style.category-list">
                                
                                <li className="style.category-item category-item__active">
                                    <a href = "#" className="style.style.category-item__link">TRANG ĐIỂM MŨI</a>   
                                </li>
            
                                <li className="style.category-item">
                                    <a href = "#" className="style.category-item__link">TRANG ĐIỂM MẶT</a>   
                                </li>
            
                                <li className="style.category-item">
                                    <a href = "#" className="style.category-item__link">TRANG ĐIỂM MÔI</a>   
                                </li>
                            </ul>
            
                        </nav>

                    </div>
                    
                    

                    <div className="style.grid__column-10">
                        <div className="style.home-filter">
                            <span className="style.home-filter__label">Sắp xếp theo</span>
                            <button className="style.btn home-filter__btn">Phổ biến</button>
                            <button className="style.btn home-filter__active home-filter__btn">Mới nhất</button>
                            <button className="style.btn home-filter__btn">Bán chạy</button>

                            
                            <div className="style.select-input">
                                <span className="style.select-input__label">Giá</span>
                                <i className="style.fas fa-angle-down select-input__icon"></i> 
                                
                                <ul className="style.select-input__list">
                                    <li className="style.select-input__item">
                                        <a href="" className="style.select-input__item-link">Giá: Thấp Đến Cao</a>
                                    </li>
                                    <li className="style.select-input__item">
                                        <a href="" className="style.select-input__item-link">Giá: Cao Đến Thấp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="style.home-filter__pagination">
                                <span className="style.home-filter__pagination-num">
                                    <span className="style.home-filter__pagination-current">1</span>    
                                    /14
                                </span>

                                <div className="style.home-filter__pagination-control">
                                    
                                    <a href="" className="style.home-filter__pagination-btn">
                                        <i className="style.fas fa-angle-left home-filter__pagination-btn__icon"></i>
                                    </a>

                                    <a href="" className="style.home-filter__pagination-btn">
                                        <i className="style.fas fa-angle-right home-filter__pagination-btn__icon"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    
                        <div className="style.home-product">
                            <div className="style.grid__row">
                                <div className="style.grid__column-2-4">
                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="style.grid__column-2-4">
                                    
                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="style.grid__column-2-4">
                                    
                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="style.grid__column-2-4">
                                    
                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="style.grid__column-2-4">
                                    
                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>

                                    <div className="style.home-product-item">
                                        <img src="./assets/img/lining.jpg" alt="" className="style.home-product-item__img"></img>
                                        <h4 className="style.home-product-item__name">Vợt cầu lông Kamito Mercury 1000 chính hãng cần bằng công thủ toàn diện</h4>
                                        <div className="style.home-product-item__price">
                                            <span className="style.home-product-item__old">1.000.000đ</span>
                                            <span className="style.home-product-item__current">500.000đ</span>
                                        </div>
                                        <div className="style.home-product-item__action">
                                            <span className="style.home-product-item__action-love home-product-item__action-loved">
                                                <i className="style.home-product-item__action-love-icon fas fa-heart"></i>
                                                <i className="style.fas fa-heart home-product-item__action-loved-icon"></i>
                                            </span>
                                            
                                            <div className="style.home-product-item__rating">
                                                <i className="style.home-product-item_stargold fas fa-star"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star home-product-item_stargold"></i>
                                                <i className="style.fas fa-star"></i>
                                            </div>
                                            
                                            <span className="style.home-product-item-sold">88 đã bán</span>
                                        </div>

                                        <div className="style.home-product-item__origin">
                                            <span className="style.home-product-item__origin-brand">Kamito</span>
                                            <span className="style.home-product-item__origin-name">Nhật Bản</span>
                                        </div>

                                        <div className="style.home-product-item__favourite">
                                            <i className="style.fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div className="style.home-product-item__saleoff">
                                            <span className="style.home-product-item__saleoff-percent">10%</span>
                                            <span for="" className="style.home-product-item__saleoff-item">GIẢM</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                
                </div>
        </div>
    );
}