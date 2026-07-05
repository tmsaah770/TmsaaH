import img1 from '../../assets/Timzee_(password_buddha)__archive/w1.png';
import img2 from '../../assets/Timzee_(password_buddha)__archive/slider__3_2000x_1-123.jpg';
import img3 from '../../assets/Timzee_(password_buddha)__archive/slider__2-72.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TopHome.css';

export default function TopHome() {
  return (
    <div className='TopHome bg-black  '>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 7000 }}
        loop={true}
        navigation={{
          nextEl: '.for',
          prevEl: '.back',
        } }>
        <SwiperSlide>
          <div className="one relative">
        <img src={img1} alt="" className='relative w-full h-[60vh] md:h-auto object-cover' />
       <div className="data absolute left-5 md:left-25 top-[10%] md:top-[20%] w-[90%] md:w-[42%] flex flex-col gap-3 md:gap-5 ">
      <div className="top flex flex-col gap-2 md:gap-4">
       <div className=" aler h2 text-white text-4xl md:text-6xl relative w-fit "> Alertzy </div>
       <div className=" h2 text-[#cca471] text-sm md:text-lg"> Exclusive Offer -20% Off This Week </div>
      </div>
       <span className=' text-neutral-300 md:text-neutral-500 text-sm md:text-[17px] ex' > 
        Expanding the offering is the choice between a leather strap or a metal bracelet, bringing the total new look. Black-tone stainless steel case with a black rubber strap. Scratch free sapphire crystal. </span>
        <div className=" flex text-neutral-300 md:text-neutral-500 text-lg md:text-xl gap-3 md:gap-5 items-center"> Starting @ 
          <span className='text-[#cca471] text-3xl md:text-[45px]'> $ 250.00 </span> </div>
          <button className='btn relative  cursor-pointer w-40 md:w-55.5 bg-[#343435] duration-300 '> <p className='text-white  text-center py-2 md:py-3.5 text-sm md:text-lg'>EXPLORE SERVICES</p> </button>
       </div>
    </div>
        </SwiperSlide>
       <button className='back btn text-white text-xl md:text-3xl w-8 md:w-10 absolute flex items-center justify-center h-8 md:h-10 mx-1 md:mx-2.5 top-[50%] cursor-pointer z-10'> <IoIosArrowBack  /> </button>
       <button className='for btn text-white text-xl md:text-3xl w-8 md:w-10 absolute flex items-center justify-center h-8 md:h-10 mx-1 md:mx-2.5 top-[50%] right-0 cursor-pointer z-10'>
        <IoIosArrowForward />
       </button>

        <SwiperSlide>
          <div className="tow relative">
          <img src={img2} alt="" className='w-full h-[60vh] md:h-auto object-cover' />
       <div className="data absolute right-5 md:right-25 top-[10%] md:top-[20%] w-[90%] md:w-[42%] flex flex-col gap-3 md:gap-5 ">
      <div className="top flex flex-col gap-2 md:gap-4">
       <div className=" aler2 h2 text-white text-4xl md:text-6xl relative w-fit"> Gertious </div>
       <div className=" h2 text-[#cca471] text-sm md:text-lg"> Exclusive of Sales Tax </div>
      </div>
       <span className=' text-neutral-300 md:text-neutral-500 text-sm md:text-[17px] ex' > 
        The watch bracelet gives a much far colder personality.Dress watch style. Swiss made luxury watch. Stainless steel case with a brown leather strap. Scratch resistant sapphire crystal.
         </span>
        <div className=" flex text-neutral-300 md:text-neutral-500 text-lg md:text-xl gap-3 md:gap-5 items-center"> Starting @ 
          <span className='text-[#cca471] text-3xl md:text-[45px]'> $350.00 </span> </div>
          <button className='  relative btn cursor-pointer w-40 md:w-55.5 bg-[#343435] duration-300 '> <p className='text-white  text-center py-2 md:py-3.5 text-sm md:text-lg'>EXPLORE SERVICES</p> </button>
       </div>
       
       </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="three relative text-center">
           <img src={img3} alt="" className='w-full h-[60vh] md:h-auto object-cover' />
       <div className="data absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-25 top-[10%] md:top-[23%] w-[90%] md:w-[42%] flex flex-col items-center gap-3 md:gap-5 ">
      <div className="top flex flex-col gap-2 md:gap-4 items-center md:items-start">
       <div className=" aler3 h2 text-white text-4xl md:text-6xl relative md:pl-5 w-fit"> Gorgeous </div>
       <div className=" h2 text-[#cca471] text-sm md:text-lg"> Exclusive of Sales Tax </div>
      </div>
       <span className=' text-neutral-300 md:text-neutral-500 text-sm md:text-[17px] ex text-center' > 
        The watch bracelet gives a much far colder personality.Dress watch style. Swiss made luxury watch. Stainless steel case with a brown leather strap. Scratch resistant sapphire crystal.
         </span>
        <div className=" flex text-neutral-300 md:text-neutral-500 text-lg md:text-xl gap-3 md:gap-5 items-center"> Starting @ 
          <span className='text-[#cca471] text-3xl md:text-[45px]'> $ 100.00 </span> </div>
          <button className=' relative btn cursor-pointer w-40 md:w-55.5 bg-[#343435] duration-300'> <p className='text-white  text-center py-2 md:py-3.5 text-sm md:text-lg'>EXPLORE</p> </button>
       </div>
       
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
