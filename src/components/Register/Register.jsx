import React from 'react';
import { useRef , useState} from 'react';

function Register(){
    const [phoneNumber,setPhoneNumber] = useState("");
    
    function inputPhoneNumber(e){
        setPhoneNumber(e.target.value);
    }

    return (
        <>
            <div className= {` inline-block rounded-lg space-y-5 p-5 bg-white`}>
                <p className="text-xl text-black">Đăng ký</p>

                <input id="phone_number" onChange={(e) => inputPhoneNumber(e)}
                className='p-3 w-full border-2 border-gray-200 rounded-sm'
                placeholder="Số điện thoại"></input>
                                    
                <button className={`${phoneNumber === "" ? 'cursor-not-allowed opacity-80 bg-orange-300' : 'hover:opacity-80 bg-orange-500'}
                    bg-orange-500 cursor-pointer hover:opacity-80 
                    pb-2 pt-2 w-full flex justify-center text-white`}>Tiếp theo</button>


                <div className='flex w-full space-x-2'> 
                    <span className='mt-3 h-0.5 w-[40%] bg-gray-100'></span>
                    <p className='text-gray-300'>HOẶC</p>
                    <span className='mt-3 h-0.5 w-[40%] bg-gray-100'></span>
                </div>

                <div className='flex place-content-between'>
                    <div className='space-x-2 pt-2 pb-2 w-[48%] justify-center 
                        flex border-2 border-yellow-100'>
                        <i class="text-blue-500 mt-1.5 fa-brands fa-facebook"></i>
                        <p>Facebook</p>
                    </div>
                    <div className='space-x-2 pt-2 pb-2 w-[48%] justify-center flex border-2 
                    border-yellow-100'>
                        <i className="mt-1.5 fa-brands fa-google"></i>
                        <p>Google</p>
                    </div>
                </div>

                <p className=''>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</p>
                
                <div className='flex space-x-1 justify-center'>
                        <p className=' text-orange-500'>Điều khoản dịch vụ</p>
                        <p>&</p>
                        <p className=' text-orange-500'>Chính sách bảo mật</p>
                </div>

                <div className='flex space-x-2 justify-center'>
                        <p>Bạn đã có tài khoản?</p>
                        <p className=' text-orange-500'>Đăng nhập</p>
                </div>
            </div>
        </>
    );
}

export default Register;