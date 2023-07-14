import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { loginFormValidation, loginvalidation } from "../../validation/validation";
import { AuthContext } from "../../context/AuthContext";

// function signin(){
const Signin: React.FC =() =>{
    const {login} = useContext(AuthContext);

    const {register, handleSubmit, formState: { errors}} =useForm<loginFormValidation>({
        resolver: zodResolver(loginvalidation),
    });

    const handlesubmitloginform = (data: loginFormValidation) => {
        console.log(data);
        login(data);
    }

    return(
        //  bg-white 
        <div className="flex flex-col justify-center items-center bg-[#191d22] h-screen px-5 ">
            <form action="sigin"
                    onSubmit={handleSubmit(handlesubmitloginform)} 
                    className="flex flex-col border-none rounded-[10px] bg-[#16181c] w-full p-5 gap-5
                                shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  shadow-[#1a222b] 
                                sm:w-[25.75rem] md:w-[38%] lg:w-[23%]">
                <div className="text-center" >
                    <h3 className="text-white font-bold text-xl mb-2">
                        Sign In
                    </h3 >
                    <p className="text-[#9b9b9d] ">
                        Login to your account
                    </p>
                </div>
                <div className=" flex flex-col  gap-3">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="inputdes"
                        {...register('email')}/>
                    <span className="errors">{errors.email?.message}</span>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="inputdes" 
                        {...register('password')}/>
                    <span className="errors">{errors.password?.message}</span>
                    <button 
                        type="submit" 
                        className=" lrfbut ">
                            {/*bg-[#2787f5]  */}
                            Sign In
                    </button>
                </div>
            </form>
            <div className="text-[#9b9b9d] text-center mt-5">
                <p>
                Don't have an account yet?
                    <Link to={"/Signup"} className="text-[#2479da] pl-1 hover:text-blue-500">
                        Sign up    
                    </Link>
                </p>
                <p>
                    <Link to={"/Forgotpassword"} className="text-[#2479da] mt-3 hover:text-blue-500">
                        Forgot Password?
                    </Link>
                </p>
            </div>

        </div>
    )
}
export default Signin;