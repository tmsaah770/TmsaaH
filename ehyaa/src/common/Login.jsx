import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


export default function Login() {
  return (
    <>
    <div className="inpots w-full flex flex-col items-center justify-center gap-5">
                <form action="" method="post" className="w-full flex flex-col items-center justify-center gap-5">
                  <input type="text" name="email" placeholder="Email Address" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <input type="password" name="password" placeholder="Password" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <button className=" w-70 border-0 bg-[#115c50] rounded opacity-75 pt-2 pb-2 pl-2 text-white cursor-pointer"> Log In </button>
                </form>
                <button className=" text-[#115c50] cursor-pointer"> Forget Your Password ? </button>
            </div>
           <div className="bottom flex flex-col items-center justify-center gap-5">
             <div className="face flex items-center justify-center p-2.5 text-[16px]  rounded-xl cursor-pointer gap-2.5 bg-white  w-70">
               <FaFacebookF />
               Continue With Facebook
            </div>
            <div className="google flex items-center justify-center p-2.5 text-[16px]  rounded-xl cursor-pointer gap-2.5 bg-white  w-70">
               <FaGoogle />
               Continue With Google
            </div>
           </div>
    </>
  )
} 
