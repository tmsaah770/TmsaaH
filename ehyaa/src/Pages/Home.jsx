
import bg from "../assets/Home-bg6.PNG" ;

export default function Home() {
  
  return (
    <div className="home">
    <div className="con flex flex-col items-center w-full overflow-hidden">
        <div className="text bg-[#52836d] w-full flex  justify-center">
            <h1 className=" w-200 text-white text-center p-1 text-xl"> You'll find the <span className=" text-2xl text-[#115c50] font-semibold">easiest</span > way to benefit from or sustainably dispose of your company's waste... <span className=" text-2xl text-[#115c50] font-semibold">with zero waste.</span> </h1>
        </div>
        <div className="bg w-340 h-100 overflow-hidden">
            <img src={bg} alt="" className=" w-full " />
        </div>
    </div>
    </div>
  )
}
 