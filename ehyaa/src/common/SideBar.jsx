import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { CgComment } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";



export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
 const navigate = useNavigate();
  return (
    <div>
              <div className={`sideBar w-50 h-117 bg-[#115c50] z-9 text-white flex flex-col gap-6 items-center pt-8 fixed top-19 left-0  ${isOpen ? "open" : ""}`}>
                 <IoPersonCircleOutline className=" text-7xl"/>
                 <div className=" flex flex-col items-center gap-3">
                        <button onClick={() => navigate('/')}
                         className="one flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">HOME</p>
                          <RiArrowGoBackLine className=" text-xl font-semibold"/>
                        </button>
                        <button onClick={() => navigate('waste')}
                         className="tow flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">WASTE DATA</p>
                          <FiAlertCircle  className=" text-xl font-semibold"/>
                        </button>
                        <button onClick={() => navigate('ship')}
                         className="three flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">SHIPMENT</p>
                          <TbTruckDelivery className=" text-2xl font-semibold"/>
                        </button>
                        <button className="four flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">REPORTS</p>
                          <CgComment  className=" text-xl font-semibold"/>
                        </button>
                        <button className="four flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">FACEBOOK</p>
                          <FiFacebook  className=" text-2xl font-semibold"/>
                        </button>
                        <button className="four flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">TWITTER</p>
                          <CiTwitter  className=" text-2xl "/>
                        </button>
                        <button className="four flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">SHARE</p>
                          <IoShareSocialOutline   className=" text-2xl "/>
                        </button>
                        <button className="four flex items-center justify-center gap-2.5 cursor-pointer">
                          <p className=" text-xl font-semibold">LOG OUT</p>
                          <IoIosLogOut    className=" text-2xl "/>
                        </button>
                 </div>
                 <button onClick={() => setIsOpen(!isOpen)}
                  className="sidebar-btn flex items-center justify-start w-5 h-10  absolute -right-5 top-[50%] cursor-pointer text-[#115c50] text-md ">
                     {isOpen ? <TfiMenu /> : <RiCloseLargeLine className=" text-lg" />}
                 </button>
              </div>
    </div>
  )
}
