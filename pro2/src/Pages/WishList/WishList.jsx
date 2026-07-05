

import { useWishlist } from '../../Zustand/WishlistSlice'
import './WishList.css'
import { useAuth } from '../../Zustand/AuthSlice'
import ProductCard from '../../Common/DaynamicComponenet/ProductCard'
import { Navigate } from 'react-router-dom'


export default function WishList() {

  const WislListData = useWishlist( s => s.WislListData )
  const CurrentUser = useAuth( s => s.CurrentUser )

  if( ! CurrentUser ){
    return <Navigate to={'/'} />
  }
  

  return (
    <div className='WishList flex flex-col items-center justify-center gap-6 md:gap-10 bg-[#030d1d] px-4 md:px-10 w-full'>
    <p className='   text-3xl md:text-4xl font-black text-(--main-color) text-center py-10 '> WISH LIST <span className='text-white'> Page </span></p>
    <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 pb-20 w-full max-w-7xl mx-auto justify-items-center">
                 {WislListData.map((item, index) => (
              
                <ProductCard value={item} key={index} />
                 ))}
             </div>
    </div>
  )
}
