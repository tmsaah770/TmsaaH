
import logo from "../assets/WhatsApp Image 2026-02-21 at 7.08.10 PM.jpeg" ;
import { NavLink } from "react-router-dom" ;
import "./nav.css";

export default function NavBar() {
  
  return (
    <>
      <nav className="wep-nav flex items-center justify-between pr-5 z-100 bg-[#f3fff0] shadow-md shadow-[#115c50]">
        <div className="logo flex items-center gap-2.5">
          <div className="ph w-16 bg-white"><img src={logo} alt="" className=" w-full p-2" /></div>
          <h1 className=" text-2xl font-semibold text-[#115c50]"> EHYAA </h1>
        </div>
        <div className="links flex items-center justify-between gap-16 pb-5  ">
              <NavLink to={"/"} className=" text-xl pr-5 pl-5 pt-5 text-[#115c50] font-semibold "> Home  </NavLink>
              <NavLink to={"/marketPlace"} className=" text-xl pr-5 pl-5 pt-5 text-[#115c50] font-semibold " > Market Place </NavLink>
              <NavLink to={"/about"} className=" text-xl pr-5 pl-5 pt-5  text-[#115c50] font-semibold "> About </NavLink>
        </div>
        <div className="sign flex items-center justify-center pr-22">
          <button 
           className=" text-lg cursor-pointer font-semibold pl-6 pr-6 pb-1 pt-1 text-center rounded-xl  text-[#115c50] border-2 border-[#115c50]"> <NavLink to={"/sign"}> Sign </NavLink> </button>
        </div>
      </nav>
    </> 
  )
}
