
import one from '../../assets/Timzee_(password_buddha)__archive/one.webp'
import tow from '../../assets/Timzee_(password_buddha)__archive/tow.webp'
import three from '../../assets/Timzee_(password_buddha)__archive/three.webp'
import four from '../../assets/Timzee_(password_buddha)__archive/four.webp'
import five from '../../assets/Timzee_(password_buddha)__archive/five.webp'
import six from '../../assets/Timzee_(password_buddha)__archive/six.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './VirsetsHome.css'


export default function VirsetsHome() {


  return (
    <div className='VirsetsHome'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={one} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> Versits </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Rhuyese ser sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={tow} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> 2019 Novalties </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Hiue wghres rhuyres magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={three} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> Javelin </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Kiures guyrese ngittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={four} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> Voltamic </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Biurese guyrese orese jittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={five} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> Cerutaio </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Ulreser tellus marquestis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card relative flex items-center justify-center overflow-hidden w-full aspect-[4/3] sm:aspect-auto">
                  <img src={six} alt="" className='w-full h-full object-cover' />
                  <div className="dat absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0000008e] px-6 md:px-10 py-5">
                    <h1 className=' text-2xl md:text-3xl text-white'> Zerairo </h1>
                    <p className=' text-sm md:text-[17px] text-neutral-400 text-center leading-6 md:leading-8'> Biurese hierese ciseittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[180px] md:w-[222px] bg-[#343435] duration-300 text-white text-center py-2 md:py-3.5 text-sm md:text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
          </div>
          <div className="swip relative">
           <Swiper
         modules={[ Navigation]}
         
         loop={true}
         navigation={{
           nextEl: '.for',
           prevEl: '.back',
         } }>
         <SwiperSlide>
           <div className="sone flex flex-col items-center justify-center text-center gap-8 bg-[#030d1d] text-neutral-400 py-12 md:py-25 px-6">
              <p className=' text-xl md:text-[42px] w-full md:w-[57%] leading-snug md:leading-normal'> "Leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet nibh" </p>
              <span className=' text-md md:text-lg text-white'> Andrew Mark </span>
           </div>
         </SwiperSlide>
         <SwiperSlide>
           <div className="stow flex flex-col items-center justify-center text-center gap-8 bg-[#030d1d] text-neutral-400 py-12 md:py-25 px-6">
              <p className=' text-xl md:text-[42px] w-full md:w-[63%] leading-snug md:leading-normal'> ‘‘The entire pursuit of a watchmaker should be the perfection of each and every watch.” </p>
              <span className=' text-md md:text-lg text-white'> - John Doe </span>
           </div>
         </SwiperSlide>
           </Swiper>
           <button className='back btn text-white text-2xl md:text-3xl w-8 md:w-10 absolute flex items-center justify-center h-8 md:h-10 mx-1 md:mx-2.5 top-[45%] left-[2%] md:left-[10%] cursor-pointer z-10'> <IoIosArrowBack  /> </button>
                  <button className='for btn text-white text-2xl md:text-3xl w-8 md:w-10 absolute flex items-center justify-center h-8 md:h-10 mx-1 md:mx-2.5 top-[45%] right-[2%] md:right-[10%] cursor-pointer z-10'>
                   <IoIosArrowForward />
                  </button>
          </div>
    </div>
  )
}
