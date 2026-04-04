



export default function SignUp() {
  return (
    <>
    <form className="inpots w-full flex flex-col items-center justify-center gap-5">
                <input type="text" name="name" placeholder="User Name" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <input type="email" name="email" placeholder="Email" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <input type="number" name="phone" placeholder="Phone" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <input type="password" name="password" placeholder="Password" className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white" />
                <select name="type" id=""  className=" w-70 border-0 bg-[#115c50] rounded pt-2 pb-2 pl-2 text-white">
                  <option value="1">Type</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button className=" w-26 border-0 bg-[#dcfad4] shadow-[#868686] shadow-md  rounded-3xl font-semibold text-xl pt-1 pb-1 pl-2 text-[#115c50] cursor-pointer"> Sign Up </button>
                
            </form>
           
    </>
  )
} 