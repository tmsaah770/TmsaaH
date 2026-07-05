import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";



export default function Contact() {


  return (
    <div className='Contact bg-[#02020a] flex flex-col items-center justify-center px-6 md:px-20 py-10 md:py-20 gap-10 md:gap-20 w-full'>

        <p className='   text-4xl font-black text-(--main-color) text-center '> CONTACT <span className='text-white'> US </span></p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-6xl mx-auto">
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className="icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <FaPhoneAlt />
            </div>
            <p className=' text-3xl text-white  '> Phone </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> 0803 - 080 - 3081 </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> 0803 - 080 - 3082 </p>
          </div>
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className="icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <MdOutlineEmail />
            </div>
            <p className=' text-3xl text-white  '> Email </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> mail@example.com </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> support@example.com </p>
          </div>
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className="icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <FaLocationArrow />
            </div>
            <p className=' text-3xl text-white  '> Address </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300 text-center px-4'> No: 58 A, East Madison Street, </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300 text-center px-4'> Baltimore, MD, USA 4508 </p>
          </div>
        </div>
    </div>
  )
}
