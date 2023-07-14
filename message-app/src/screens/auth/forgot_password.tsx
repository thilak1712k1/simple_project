import { Link } from "react-router-dom";

function forgotpassword(){

    return(
        <div className="flex flex-col justify-center items-center h-screen bg-[#191d22] p-5">
            <form action="forgot_password"
                    className="bg-[#16181c] flex flex-col justify-center items-center gap-5 border-none rounded-lg
                                w-full p-5 sm:w-[25.75rem] md:w-[38%] lg:w-[23%]">
                <h5 className="text-white font-bold text-xl">
                    Password Reset
                </h5>
                <p className="text-[#9b9b9d]">
                    Enter your email to reset password
                </p>
                <input type="email" 
                        placeholder="Email"
                        className="inputdes" />
                <button className="lrfbut">
                    Send reset link
                </button>
            </form>
            <p className="text-[#9b9b9d] mt-5">
                Already have a account?
                <Link to={"/Signin"}
                    className="text-[#2479da] pl-1 hover:text-blue-500">
                    Sign in
                </Link>
            </p>
        </div>
    )
}
export default forgotpassword;