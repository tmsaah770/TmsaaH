import { Outlet } from 'react-router-dom'

import Footer from '../common/Footer'
import NavBar from '../common/navBar'

export default function Layout() {
  return (
    <>
       <NavBar />
             <Outlet/>
       <Footer />
    </>
  )
}