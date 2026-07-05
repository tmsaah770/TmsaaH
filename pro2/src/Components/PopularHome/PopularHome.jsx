import { useEffect } from "react";
import ProductCard from "../../Common/DaynamicComponenet/ProductCard";
import { useDisplay } from "../../Zustand/displaySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PopularHome({ category, setCategory }) {
  const getProducts = useDisplay((s) => s.getProducts);
  const products = useDisplay((s) => s.products);

  

  // Load products on category change
  useEffect(() => {
    const categoryMap = {
      men: "men watches",
      women: "women watches",
      couples: "couble watches",
    };
    getProducts(categoryMap[category] || "men watches");

    // Reset swiper position
    
  }, [category]);

  // Fix Swiper navigation after render
  
  return (
    <div className="PopularHome pt-10 md:pt-20 relative pb-10 md:pb-20 bg-black">
      <h1 className="alen h2 text-white text-3xl md:text-4xl relative text-center w-fit mx-auto px-4">
        Popular In Store
      </h1>

      {/* Tabs */}
      <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 md:mt-10 text-lg md:text-xl px-4">
        {["men", "women", "couples"].map((tab) => (
          <button
            key={tab}
            onClick={() => setCategory(tab)}
            className={` btn2 transition duration-300 ${
              category === tab
                ? " text-(--main-color) cursor-pointer  " 
                : "text-neutral-500 hover:text-(--main-color) cursor-pointer"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.back',
          nextEl: '.for',
        }}
       
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-[85%] md:w-[90%] mx-auto my-8 md:my-12"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard value={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <button
        
        className="back btn absolute left-2 md:left-5 cursor-pointer top-2/3 -translate-y-1/2 text-white text-2xl md:text-3xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10"
      >
        <IoIosArrowBack />
      </button>
      <button
        
        className="for btn absolute right-2 md:right-5 cursor-pointer top-2/3 -translate-y-1/2 text-white text-2xl md:text-3xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
