import logo from "../assets/WhatsApp Image 2026-02-21 at 7.08.10 PM.jpeg"
import {NavLink, Outlet } from "react-router-dom"
import "../common/login.css" ;




export default function Login_Sign() {
  return (
    <>
    <div className="boby    ">
         <div className="img p-2.5  w-20 bg-white">
            <img src={logo} alt="" className=" w-full " />
         </div>
<section className=" flex justify-center">
         <div className="sec flex justify-center w-120 pb-18 h-150 overflow-hidden -mt-10 rounded-3xl  ">
            <div className="con flex   justify-center relative w-120  rounded-3xl overflow-hidden   ">
            <img src={logo} alt="" className=" w-full -z-10 absolute left-[50%] top-[50%] -translate-[50%] pt-14 pl-14 pr-14 pb-6  bg-white opacity-15 " />
            <div className="box w-full  flex flex-col items-center shadow-2xl pt-6  rounded-3xl gap-7 h-130 border-2 border-[#6fa1863b] ">
            <h1 className=" text-3xl font-bold text-[#115c50]"> EHYAA </h1>
            <nav className=" sign-nav flex items-center h-9 rounded-3xl  bg-[#115c50]  w-70 gap-2  ">
                <NavLink to={""} end className="nav-link flex justify-center items-center w-34 font-bold  text-[16px] text-white "> Log In </NavLink>
                <NavLink to={"signup"} end className="nav-link flex items-center justify-center w-34   text-white  text-[16px] "> Sign Up </NavLink>
            </nav>
            <Outlet/>
         </div>
            </div>
         </div>

</section> 
         
    </div>
    </>
  )
}
