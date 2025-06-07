import React from 'react';

function Login(){
    return (
        <>  
            <div className='bg-white pl-16 pr-16 pt-10 pb-10 place-content-between flex'>
                <div className='flex space-x-2'>
                    <img className='h-12 w-16' src='./images/logo.png'></img>
                    <p className='text-black text-xl'>Đăng nhập</p>
                </div>
                
                <p className='text-red-300 text-xl'>Bạn cần giúp đỡ?</p>
            </div>

            <div className='relative bg-orange-500'>
                <div className='absolute rounded-lg space-y-5 p-5 bg-gray-200'>
                    <div className='flex space-x-3'>
                        <p className='m-3 text-black text-xl'>Đăng nhập</p>
                        <div className='p-3 bg-white text-yellow-200 border-2 border-yellow-200'>Đăng nhập với mã QR</div>
                        <img className='h-3 w-3'></img>
                    </div>

                    <input className='p-3 w-full' placeholder="Email/Số điện thoại/Tên đăng nhập"></input>
                    
                    <div className=''>
                        <input className='w-full p-3' placeholder="Mật khẩu"></input>
                        <i className="fa-solid fa-eye"></i>
                    </div>

                    <button className='pb-2 pt-2 w-full flex justify-center text-white bg-orange-300'>Đăng nhập</button>

                    <div className='flex place-content-between'>
                        <p className='text-blue-400 text-sm'>Quên mật khẩu</p>
                        <p className='text-blue-400 text-sm'>Đăng nhập với SMS</p>
                    </div>

                    <div className='flex w-full'> 
                        <span className='m-3 h-1 w-[40%] bg-red-200'></span>
                        <p>HOẶC</p>
                        <span className='m-3 h-1 w-[40%] bg-red-200'></span>
                    </div>

                    <div className='flex place-content-between'>
                        <div className='pt-2 pb-2 w-[48%] justify-center flex border-2 border-yellow-100'>
                            <img></img>
                            <p>Facebook</p>
                        </div>
                        <div className='pt-2 pb-2 w-[48%] justify-center flex border-2 border-yellow-100'>
                            <img></img>
                            <p>Google</p>
                        </div>
                    </div>

                    <div className='flex space-x-2 justify-center'>
                        <p className=''>Bạn mới biết đến Shopee?</p>
                        <p className=' text-orange-500'>Đăng ký</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;