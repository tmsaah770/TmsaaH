
import './MostWantedHome.css'


export default function MostWantedHome() {

  return (
    <div className='MostWantedHome h-[350px] md:h-[570px] flex items-center justify-center px-4'>
      <div className=" flex flex-col items-center justify-center gap-6 md:gap-10 w-fit mx-auto "> 
           <h1 className="aler3 text-white text-3xl md:text-5xl relative pl-2 md:pl-5 text-center"> Most wanted of the year </h1>
           <button className=' relative btn cursor-pointer w-[150px] md:w-[180px] bg-[#343435] duration-300 text-white text-center py-2.5 md:py-3.5 text-md md:text-lg'> SHOP NOW </button>
     </div>
      
    </div>
  )
}
