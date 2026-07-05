

import { Outlet } from "react-router-dom";
import SideBar from "../common/SideBar";



export default function MarketPlace() {


  return (
    <div className=" relative ">

     <SideBar/>
    <Outlet />



    </div>
  )
}
