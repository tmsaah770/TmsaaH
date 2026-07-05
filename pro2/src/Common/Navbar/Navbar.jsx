import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Timzee_(password_buddha)__archive/logo_1.png'
import { IoMdHeart, IoMdMenu, IoMdClose } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAuth } from '../../Zustand/AuthSlice';
import {Button , Menu , MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useWishlist } from '../../Zustand/WishlistSlice';
import { useCart } from '../../Zustand/CartSlice';


export default function Navbar() {


  const FetchWishListProducts = useWishlist( s => s.FetchWishListProducts )
    const WislListData = useWishlist( s => s.WislListData )
    const ClearWishList = useWishlist( s => s.ClearWishList )
    const CurrentUser = useAuth( s => s.CurrentUser )
    const CartData = useCart( s => s.CartData )
    const CartDataAmount = CartData.reduce( ( a , b )=> a +b.amount , 0 )

   
    const LogoutHandle = useAuth( s => s.LogoutHandle )

    const SignOut = async()=>{
      handleClose()
      ClearWishList()
      await LogoutHandle()
    }

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    if( !CurrentUser ){
      return
    }
    FetchWishListProducts()
  },[CurrentUser])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className='Navbar relative z-50 w-full bg-[#0e1d55] flex items-center justify-between px-4 md:px-7 py-3'>
      <Link to={'/'}> <img src={logo} alt="Logo" className="w-24 md:w-auto" /> </Link>
      
      {/* Desktop Menu */}
      <div className="cen hidden md:flex items-center justify-between gap-8 text-lg text-neutral-400 font-semibold">
        <NavLink to={'/'} className='px-3 duration-300 hover:text-[#cca471]'> HOME </NavLink>
        <NavLink to={'/shop'} className='px-3 duration-300 hover:text-[#cca471]'> SHOP </NavLink>
        <NavLink to={'/blog'} className='px-3 duration-300 hover:text-[#cca471]'> BLOGS </NavLink>
        <NavLink to={'/contact'} className='px-3 duration-300 hover:text-[#cca471]'> CONTACT US </NavLink>
      </div>

      <div className="lef hidden md:flex items-center justify-center gap-8 text-neutral-400 pr-5">
        {!CurrentUser ? (
          <div className="flex items-center justify-center gap-2.5">
            <NavLink to={'/rejester'} className='cursor-pointer text-md text-white hover:text-(--main-color) duration-300'> REGISTER </NavLink>
            <div className="h-5 w-1 bg-(--main-color)"></div>
            <NavLink to={'/login'} className='cursor-pointer text-md text-white hover:text-(--main-color) duration-300'> LOGIN </NavLink>
          </div>
        ) : (
          <>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
              <div className="text-white"> WELCOME <span className='text-lg text-(--main-color) font-bold'> { (CurrentUser.FirstName).toUpperCase() } </span> </div>
            </Button>
            <Menu className='text-(--sec-color)' id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{ list: { 'aria-labelledby': 'basic-button', }, }}>
              <MenuItem sx={{ width : '100px' }} onClick={handleClose}>Profile</MenuItem>
              <MenuItem sx={{ width : '100px' }} onClick={SignOut}>Logout</MenuItem>
            </Menu>
          </> 
        )}
        <div className="flex items-center gap-1">
          <Link to={'/wishlist'}>
            <IoMdHeart className='text-2xl duration-300 hover:text-[#cca471] font-black'/>
          </Link>
          <sub> {WislListData.length} </sub>
        </div>
        <div className="flex items-center gap-1">
          <Link to={'/cart'}>
            <HiOutlineShoppingCart className='text-xl duration-300 hover:text-[#cca471] cursor-pointer'/>
          </Link>
          <sub> {CartDataAmount} </sub>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center gap-4 text-white">
        <div className="flex items-center gap-1">
          <Link to={'/cart'}>
            <HiOutlineShoppingCart className='text-xl duration-300 hover:text-[#cca471] cursor-pointer'/>
          </Link>
          <sub> {CartDataAmount} </sub>
        </div>
        <button onClick={toggleMobileMenu} className="text-3xl text-(--main-color) focus:outline-none">
          {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0e1d55] flex flex-col items-center gap-4 py-5 shadow-lg md:hidden z-50 border-t border-gray-700">
          <NavLink to={'/'} onClick={toggleMobileMenu} className='text-lg text-neutral-400 font-semibold hover:text-[#cca471]'> HOME </NavLink>
          <NavLink to={'/shop'} onClick={toggleMobileMenu} className='text-lg text-neutral-400 font-semibold hover:text-[#cca471]'> SHOP </NavLink>
          <NavLink to={'/blog'} onClick={toggleMobileMenu} className='text-lg text-neutral-400 font-semibold hover:text-[#cca471]'> BLOGS </NavLink>
          <NavLink to={'/contact'} onClick={toggleMobileMenu} className='text-lg text-neutral-400 font-semibold hover:text-[#cca471]'> CONTACT US </NavLink>
          
          <div className="flex flex-col items-center gap-4 mt-4 w-full px-5">
            {!CurrentUser ? (
              <div className="flex items-center justify-center gap-4 w-full">
                <NavLink to={'/rejester'} onClick={toggleMobileMenu} className='text-white hover:text-(--main-color) font-semibold'> REGISTER </NavLink>
                <div className="h-5 w-1 bg-(--main-color)"></div>
                <NavLink to={'/login'} onClick={toggleMobileMenu} className='text-white hover:text-(--main-color) font-semibold'> LOGIN </NavLink>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                 <div className="text-white text-center"> WELCOME <br/><span className='text-lg text-(--main-color) font-bold'> { (CurrentUser.FirstName).toUpperCase() } </span> </div>
                 <button onClick={SignOut} className="text-red-400 mt-2">Logout</button>
              </div>
            )}
            <div className="flex items-center gap-2 mt-2">
              <Link to={'/wishlist'} onClick={toggleMobileMenu} className="flex items-center gap-1 text-white hover:text-[#cca471]">
                <IoMdHeart className='text-2xl'/> Wishlist <sub> {WislListData.length} </sub>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}



