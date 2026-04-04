
import bg from "../assets/About-bg2.png" ;
import "../Pages/about.css" ;

export default function About() {
  return (
    <div className="min-h-screen bg-[#f3fff0] flex flex-col items-center my-1 pb-28 py-16 px-4 ">

      <div className="bg-[#f3fff0] text-black text-lg md:text-xl 
                      px-8 py-4 rounded-2xl shadow-md mb-12 text-center">
        احياء... لان كل شيء يستحق فرصة ثانية
      </div>

      <div className="relative max-w-5xl w-full overflow-hidden
                       backdrop-blur-sm
                      border-2 border-green-700 
                      rounded-3xl shadow-xl 
                      p-8 md:p-12">
          <div className="img absolute top-0 left-0  w-255 opacity-50">
            <img src={bg} alt="" className=" size-full" />
          </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-96 h-96  rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-items-start -mt-10">

          <h2 className="text-2xl md:text-3xl font-bold  text-green-900 mb-5">
            من نحن؟
          </h2>

          <p className="text-center text-black font-bold text-lg leading-8 max-w-3xl mx-auto mb-10">
           .نحن منصة لإعادة التدوير  <br />  مشروع (إحياء) يهدف إلى ربط الشركات   <br />والمصانع 
            التي تمتلك مخلفات قابلة لإعادة التدوير مع الجهات التي تحتاج <br />. هذه المخلفات
           لإعادة استخدامها  
          </p>

          <div className="flex items-center justify-center   gap-6">

            <div className="text-center  text-black font-bold text-lg flex flex-col items-center   border-2 border-green-700 
                            rounded-2xl p-2 shadow-md">

              <div className="flex items-center gap-2">
                <h3 className="font-bold  text-xl text-green-950"> 
             هدفنا   
                </h3>
                <div className="bg-black text-white w-6 h-6 
                                flex items-center justify-center 
                                rounded-full text-sm font-bold">
                  !
                </div>
              </div>

              <p className=" w-full">، دعم الاستدامة 
               وتقليل التلوث  <br />وتحويل المخلفات إلى موارد لها قيمة بدل ما يتم التخلص منها <br />.
               بشكل يضر البيئة   <br />
                نسعى لتقديم حل بسيط وسريع يساعد المصانع في التخلص  <br />،
                من مخلفاتها     
                بطريقة آمنة    <br />.  وفي نفس الوقت نوفر خامات معاد تدويرها للشركات بأسعار مناسبة  
              </p>
            </div>

            <div className=" border-2 border-green-700 
                            rounded-2xl p-3 shadow-md flex flex-col items-end">

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold  text-xl text-green-950">
                  مبادئنا
                </h3>
                <div className="bg-black text-white w-6 h-6 
                                flex items-center justify-center 
                                rounded-full text-sm font-bold">
                  !
                </div>
              </div>

              <ul className="list-disc  flex flex-col items-end  text-black font-bold text-lg space-y-1">
                <p className=" -mx-3 flex flex-row-reverse items-center justify-between gap-5 "><li> </li> <span className=" px-2"> حماية البيئة </span> </p>
                <p className=" -mx-3 flex flex-row-reverse items-center justify-between gap-5"><li> </li> <span className=" px-2"> الاستدامة </span> </p>
                <p className=" -mx-3 flex flex-row-reverse items-center justify-between gap-5"><li> </li> <span className=" px-2"> الشفافية </span> </p>
                <p className=" -mx-3 flex flex-row-reverse items-center justify-between gap-5 pl-2.5"><li> </li> <span className=" px-2">  تسهيل التعامل بين الأطراف  </span> </p>
                
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
 
