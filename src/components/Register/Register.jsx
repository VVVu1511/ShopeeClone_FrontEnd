import React from 'react';
import { useRef , useState} from 'react';
import { useInRouterContext, useNavigate } from 'react-router-dom';

function inputBlock(text,ref){
    return (
        <input ref={ref}
                className='p-3 w-full border-2 border-gray-200 rounded-sm'
                placeholder={text}></input>
    );  
}

function Register(setToken){
    const phoneNumber = useRef("");
    const username = useRef("");
    const password = useRef("");
    const firstName = useRef("");
    const lastName = useRef("");
    const address = useRef("");
    const email = useRef("");
    const dob = useRef(null); 

    const navigate = useNavigate();

    const handleRegisterButton = async () => {
    
    const response = await fetch("http://localhost:8080/shop/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiIiwiaXNzIjoiVnUuY29tIiwiZXhwIjoxNzUwMDUyNDI0LCJpYXQiOjE3NTAwNDg4MjQsImp0aSI6ImUwZjA5MTc1LWI1NTEtNDE3ZC1iYjdlLTY1MjViYzJjZDg0ZiJ9.Eg4m75SBzPLHTbcR294850CR_SnStqLjhd6xiHqbrbuag3kXocLVj9xKihfDZRUu4uPxoQaI7jENn9kAS2aCQw"
        },
        body: JSON.stringify({
            username: username.current.value,
            password: password.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            phone: phoneNumber.current.value,
            address: address.current.value,
            email: email.current.value,
            dob: dob.current.value 
        })
    });

    const data = await response.json();

    if(data.code == 0){
        navigate("/login");
    }
    else{
        alert("Couldn't create user");
    }
};

    return (
        <>
            <div className= {`inline-block rounded-lg space-y-5 p-5 bg-white`}>
                <p className="text-xl text-black">Đăng ký</p>

                {inputBlock("Số điện thoại",phoneNumber)}
                {inputBlock("",username)}
                {inputBlock("",password)}
                {inputBlock("",firstName)}
                {inputBlock("",lastName)}
                {inputBlock("",address)}
                {inputBlock("",email)}
                {inputBlock("",dob)}

                                    
                <button onClick={handleRegisterButton} className={`${phoneNumber === "" ? 'cursor-not-allowed opacity-80 bg-orange-300' : 'hover:opacity-80 bg-orange-500'}
                    bg-orange-500 cursor-pointer hover:opacity-80 
                    pb-2 pt-2 w-full flex justify-center text-white`}>Đăng ký</button>


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
                        <p onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }} className='cursor-pointer text-orange-500'>Đăng nhập</p>
                </div>
            </div>
        </>
    );
}

export default Register;