import { useEffect } from 'react';
import ProductCard from '../../Common/DaynamicComponenet/ProductCard'
import { useDisplay } from '../../Zustand/displaySlice';
import './Shop.css'
export default function Shop() {

  const getProducts = useDisplay((s) => s.getProducts);
    const products = useDisplay((s) => s.products);

    useEffect(() => {
        getProducts();
    }, []);
    
    
    
  return (
    <div className='Shop flex flex-col items-center justify-center gap-6 md:gap-10 bg-[#030d1d] px-4 md:px-10 w-full'>
         <h1 className=' text-3xl md:text-5xl font-bold text-(--main-color) pt-10 md:pt-20'> PRODUCTS </h1>
         <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 pb-20 w-full max-w-7xl mx-auto justify-items-center">
             {products.map((item, index) => (
           
            <ProductCard value={item} key={index} />
             ))}
         </div>
    </div>
  )
}
