import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { registerFormvalidation, registervalidation} from '../../validation/validation'
import { zodResolver} from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";

const Signup: React.FC =() =>{
    const {registerUser} = useContext(AuthContext);

    const {register, handleSubmit, formState: {errors}} = useForm<registerFormvalidation>({
        resolver: zodResolver(registervalidation),
    });

    const registerhandlesubmit= (data: registerFormvalidation)=> {
        console.log(data);
        registerUser(data);
    }

    return(
        <div className="flex flex-col justify-center items-center h-screen p-5 bg-[#191d22]">
            <form action="signup"
                    onSubmit={handleSubmit(registerhandlesubmit)}
                    className="w-full p-5 gap-3 bg-[#16181c] border-none
                                rounded-xl sm:w-[25.75rem] md:w-[38%] lg:w-[23%]">
                <h5 className="text-white font-bold text-base text-center mb-2">
                    Sign Up
                </h5>
                <p className="text-[#9b9b9d] text-center">
                    Follow the easy steps
                </p>
                <div className="flex flex-col gap-3 mt-5">
                    <input type="text" 
                            placeholder="Username" 
                            className="inputdes"
                            {...register('username')} />
                    <span className="errors">{errors.username?.message}</span>
                    <input type="email" 
                            placeholder="Email" 
                            className="inputdes"
                            {...register('email')}/>
                    <span className="errors">{errors.email?.message}</span>
                    <input type="password" 
                            placeholder="Password" 
                            className="inputdes"
                            {...register('password')}/>
                    <span className="errors">{errors.password?.message}</span>
                    <button type="submit"
                            className="lrfbut">
                        Create account
                    </button>
                </div>
            </form>
            <p className="text-[#9b9b9d] mt-5">
                Already have a accound?
                <Link to={"/signin"} className="text-[#2479da] pl-1 hover:text-blue-500">
                    Sign in
                </Link>
            </p>
        </div>
    )
}

export default Signup;