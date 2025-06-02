import ProductCard from "../ProductCard/ProductCard";

function FilterBlock(){
    return "flex justify-center items-center h-12 bg-white pl-3 pr-3 cursor-pointer";
}

function ProductGrid(){
    return (
        <>
            <div className="w-[80%] pt-5">
                <div className="flex space-x-2 mb-5">
                    <i className="mt-1.5 fa-solid fa-lightbulb"></i>
                    <p>Kết quả tìm kiếm cho từ khoá </p>
                    <p className="text-orange-500">'ốp đẹp'</p>
                </div>

                <div className="bg-gray-50 w-full pt-3 pb-3 pl-5 pr-5">
                    <ul className="flex place-content-between">
                        {/* pt-2 pb-2 pl-5 pr-5 bg-white active:bg-orange-500 */}
                        
                        <li className="flex space-x-2"> 
                            <div className="mt-2.5 mr-2">Sắp xếp theo</div>
                            <div className={"items-center justify-center " + FilterBlock()}>
                                Liên Quan
                            </div>
                            <div className={FilterBlock()}>Mới Nhất</div>
                            <div className={FilterBlock()}>Bán Chạy</div>

                            <div className= {FilterBlock() + " space-x-32"}>
                                <p>Giá</p>
                                <i className="mt-0.5 ml-5 fa-solid fa-arrow-down"></i>
                            </div>
                        </li>
                        
                        
                        <li className="flex">
                            <p className="mt-3 text-orange-500">1</p>
                            <p className="mt-3 mr-5">/17</p>
                            
                            <div className="flex">
                                
                                <div className="bg-gray-100 opacity-50 flex place-items-center p-3">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </div>

                                <div className="bg-white flex place-items-center p-3">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grid grid-cols-5 mt-1 justify-center flex">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>


            </div>
        </>
    );
}

export default ProductGrid;