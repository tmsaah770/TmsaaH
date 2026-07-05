import { Outlet } from 'react-router-dom'

import Footer from '../common/Footer'
import NavBar from '../common/navBar'
import SideBar from '../common/SideBar'

export default function Layout2() {
  return (
    <>
       <NavBar />
       <SideBar />
             <Outlet/>
       <Footer />
    </>
  )
}