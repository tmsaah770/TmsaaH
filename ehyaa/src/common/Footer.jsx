
import logo from "../assets/Footer-logo.jpeg" ;
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";


export default function Footer() {
  return (
    <>
    <footer className=" flex items-center gap-10 bg-[#52836d] p-3.5  static bottom-0  z-10  w-full -mt-0.5 text-white ">
      <div className="contact flex items-center gap-7 pl-5">
        <div className="footerLogo w-16 overflow-hidden ">
          <img src={logo} alt="" className=" w-full" />
        </div>
        <p className=" text-3xl font-bold"> Contact Us </p>
      </div>
        <CiTwitter className="twet text-4xl  " />
        <FiFacebook className="twet text-2xl  " />
    </footer>
    </>
  )
}
 