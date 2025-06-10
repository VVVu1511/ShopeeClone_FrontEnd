import React from "react";
import Footer from "../Footer/Footer";


function LoginRegisterFrame({ Component ,setToken}){
    return (
        <>
            <div className='bg-white pl-16 pr-16 pt-8 pb-8 place-content-between flex'>
                <div className='flex space-x-3'>
                    <img className='box-border w-24 h-6'  src='./images/logo.png'></img>
                    <p className=' text-black text-xl'>Đăng nhập</p>
                </div>
                
                <p className='text-red-300 text-xl'>Bạn cần giúp đỡ?</p>
            </div>

            <div className='flex justify-end pr-32 bg-orange-500 pt-16 pb-16'>
                <Component setToken={setToken}/>
            </div>

            <Footer></Footer>
        </>
    );
}

export default LoginRegisterFrame;