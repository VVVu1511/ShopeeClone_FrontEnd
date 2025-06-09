import React, { useRef, useState } from 'react';
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';

function Login(){
    const [isButtonActive,setIsButtonActive] = useState(false);
    const [isAccountValid, setIsAccountValid] = useState(true);
    const [password,setPassword] = useState('');
    const userName = useRef(null);
    const [eyeOpen, setEyeOpen] = useState(false);
    const navigate = useNavigate();

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    function handleLoginInput(){    
        if(userName.current.value === "" || password === ""){
            setIsButtonActive(false);
            return;
        }

        setIsButtonActive(true);
    }

    async function handleLoginButton(){
        const response = await fetch("http://localhost:8080/shop/auth/token",{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            "body": JSON.stringify({
                username: userName.current.value,
                password: password
            })
        });

        const data = await response.json();

        if(data.code === 0){
            setIsAccountValid(true);
            navigate("/home");
        }

        else{
            setIsAccountValid(false);
        }
    }

    function handleEyeClick(){
        const passwordInput = document.getElementById('password');
        if(passwordInput.type === "password"){
            setEyeOpen(true);
            passwordInput.type ="text";
        }
        else{
            setEyeOpen(false);
            passwordInput.type = "password";
        }
    }

    function handleRegisterClick(){
        navigate("/register");
    }

    return (
        <>  
                <div className= {`inline-block rounded-lg space-y-5 p-5 bg-white 
                    ${style.login}`}>
                    <div className='flex space-x-3'>
                        <p className='m-3 text-black text-xl'>Đăng nhập</p>
                        <div className='p-3 bg-white text-yellow-200 border-2 
                        border-yellow-200'>Đăng nhập với mã QR</div>
                        <i className="fa-solid fa-qrcode mt-5 text-orange-500"></i>
                    </div>

                    <div className={`pt-2 pb-2 pl-3 pr-3 space-x-2 w-full border-2 border-red-200 flex ${isAccountValid ? 'hidden' : 'block'}`}>
                        <i class="mt-1 fa-solid fa-xmark text-red-300"></i>
                        <div>
                            <p className='text-sm'>Tên tài khoản của bạn hoặc Mật khẩu không</p>
                            <p className='text-sm'>đúng, vui lòng thử lại</p>
                        </div>
                    </div>

                    <input ref={userName} onChange={handleLoginInput} id="userName" 
                        className='p-3 w-full border-2 border-gray-200 rounded-sm'
                        placeholder="Email/Số điện thoại/Tên đăng nhập"></input>
                                        
                    <div className='relative'>
                        <input type='password' onChange={(e) => {
                            handleLoginInput(); 
                            handlePasswordInput(e);
                        }} id="password" className='w-full p-3 border-2 border-gray-200 rounded-sm' placeholder="Mật khẩu"></input>
                        <i
                            onClick={handleEyeClick}
                            className={`right-3.5 top-3.5 absolute ${
                            eyeOpen ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`}
                        />

                    </div>

                    <button onClick={handleLoginButton} 
                        className={`${isButtonActive 
                        ? "bg-orange-500 cursor-pointer hover:opacity-80" : "bg-orange-300 cursor-not-allowed"} 
                        pb-2 pt-2 w-full flex justify-center text-white`}>Đăng nhập</button>

                    <div className='flex place-content-between'>
                        <p className='text-blue-400 text-sm'>Quên mật khẩu</p>
                        <p className='text-blue-400 text-sm'>Đăng nhập với SMS</p>
                    </div>

                    <div className='flex w-full space-x-2'> 
                        <span className='mt-3 h-0.5 w-[40%] bg-gray-100'></span>
                        <p>HOẶC</p>
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

                    <div className='flex space-x-2 justify-center'>
                        <p className=''>Bạn mới biết đến Shopee?</p>
                        <p onClick={handleRegisterClick} className='cursor-pointer text-orange-500'>Đăng ký</p>
                    </div>
                </div>
        </>
    );
}

export default Login;