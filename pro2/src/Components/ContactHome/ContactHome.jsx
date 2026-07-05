import './ContactHome.css'
import bg from '../../assets/Timzee_(password_buddha)__archive/Bg3.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";


export default function ContactHome() {


  return (
    <div className='ContactHome'>
      <div className="cont relative h-[400px] md:h-auto overflow-hidden">
      <img src={bg} alt="" className="w-full h-full object-cover" />
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-50 flex flex-col items-center justify-center gap-6 md:gap-10 w-full max-w-xl px-4 text-center">
        <h1 className=' text-3xl md:text-5xl text-white new relative w-fit mx-auto '> Newsletter </h1>
        <div className="inp flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <input type="text" placeholder='Email Address' className=' w-full max-w-[400px] h-14 border border-neutral-600 bg-black/40 px-4'/>
          <button className=' relative in-b cursor-pointer bg-[#343435] text-white  text-center py-3.5 text-lg w-full max-w-[150px]' > SUBSCRIBE </button>
        </div>
        <p className=' text-neutral-400 font-light text-md md:text-lg'> Will be used in accordance with our Privacy policy </p>
        <div className="ico flex items-center justify-center gap-2.5 ">
        <div  className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaXTwitter/> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaFacebookSquare /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <RiPinterestLine /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <IoLogoInstagram /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaYoutube /> </div>
        </div>
      </div>
      </div>

    </div>
  )
}
