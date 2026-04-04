import { FaSearch } from "react-icons/fa";
import {TextField , InputAdornment , Select , MenuItem , InputLabel , FormControl} from "@mui/material"
import img1 from '../assets/material1.jpg'
import img2 from '../assets/material2.jpg'
import img3 from '../assets/material3.webp'
import img4 from '../assets/material4.webp'
import img5 from '../assets/material5.jpg'
import img6 from '../assets/material6.avif'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";




export default function MainMarket() {
  return (
    <div>
              <div className="page p-10 flex flex-col items-center gap-10 ">
        <div className="top flex items-center justify-center gap-10 w-full">
          <div className="search bg-white pl-2.5 pr-2.5  rounded-xl flex items-center">
                
        <TextField
          
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">Search</InputAdornment>,
            },
          }}
          variant="standard"
        />
            <button className=" flex items-center justify-center p-1 cursor-pointer"> <FaSearch /> </button>
          </div>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Governorate</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={''}
              label="Governorate"
              className=" w-35 bg-white "
              sx={{borderRadius:"15px" , height:'47px' }}
            >
              <MenuItem value={'الاسكندرية'}>الاسكندرية</MenuItem>
              <MenuItem value={'البحيرة'}>البحيرة</MenuItem>
              <MenuItem value={'كفر الشيخ'}>كفر الشيخ</MenuItem>
              <MenuItem value={'الدقهلية'}>الدقهلية</MenuItem>
              <MenuItem value={'دمياط'}>دمياط</MenuItem>
              <MenuItem value={'الشرقية'}> الشرقية</MenuItem>
              <MenuItem value={'الغربية'}>الغربية</MenuItem>
              <MenuItem value={'المنوفية'}>المنوفية</MenuItem>
              <MenuItem value={'القاهرة'}>القاهرة</MenuItem>
              <MenuItem value={'الجيزة'}>الجيزة</MenuItem>
              <MenuItem value={'القليوبية'}>القليوبية</MenuItem>
              <MenuItem value={'بورسعيد'}>بورسعيد</MenuItem>
              <MenuItem value={'الاسماعلية'}>الاسماعلية</MenuItem>
              <MenuItem value={'السويس'}>السويس</MenuItem>
              <MenuItem value={'شمال سيناء'}>شمال سيناء</MenuItem>
              <MenuItem value={'جنوب سيناء'}>جنوب سيناء</MenuItem>
              <MenuItem value={'الفيوم'}>الفيوم</MenuItem>
              <MenuItem value={'بني سويف'}>بني سويف</MenuItem>
              <MenuItem value={'المنيا'}>المنيا</MenuItem>
              <MenuItem value={'اسيوط'}>اسيوط</MenuItem>
              <MenuItem value={'سوهاج'}>سوهاج</MenuItem>
              <MenuItem value={'قنا'}>قنا</MenuItem>
              <MenuItem value={'الاقصر'}>الاقصر</MenuItem>
              <MenuItem value={'اسوان'}>اسوان</MenuItem>
              <MenuItem value={'البحر الاحمر'}>البحر الاحمر</MenuItem>
              <MenuItem value={'الوادي الجديد'}>الوادي الجديد</MenuItem>
              <MenuItem value={'مطروح'}>مطروح</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img1}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> WOOD BOARDS</span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">110 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">Dakahlia</span></p>
      </div>
      
    </div>
  </div>
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img2}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> PLASTIC-PIT </span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">30 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">Dakahlia</span></p>
      </div>
    </div>
  </div>
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img3}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> PA-PA STRAPS</span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">30 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">Gharbia</span></p>
      </div>
    </div>
  </div>
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img4}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> PLASTIC PIT</span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">110 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">DAKAHLIA</span></p>
      </div>
    </div>
  </div>
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img5}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> WOOD BOARDS</span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">110 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">DAKAHLIA</span></p>
      </div>
    </div>
  </div>
          <div className=" rounded-2xl p-4  border-2 border-gray-300 w-75">
    
    {/* Status */}
    <div className="flex justify-center mb-3">
      <span className=" flex items-center gap-2.5 text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full border border-green-300">
      <div className="crcle w-2.5 h-2.5  border-2 border-[#3e8d80]"></div>
        Ongoing Availability
      </span>
    </div>

    {/* Image */}
    <img
      src={img6}
      alt="waste"
      className="w-full h-40 object-cover rounded-xl mb-3"
    />

    {/* Title */}
    <h3 className="font-semibold  text-black mb-2">
      Prodection Waste <span className=" text-xl text-[#0c814a]"> WOOD BOARDS</span>
    </h3>

    {/* Info */}
    <div className="flex flex-col gap-2 font-semibold  text-black">
      <div className=" flex items-center gap-1.5">
        <div className=""> <HiMiniShoppingBag  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Quantity Available <span className="font-bold text-xl text-[#0c814a]">110 MT</span></p>
      </div>
      <div className=" flex items-center gap-1.5">
        <div className=""> <FaLocationDot  className="w-7 h-7 p-1 bg-gray-300 rounded-full text-[#0c814a]"/> </div>
        <p> Governorate <span className="font-bold text-[#0c814a] text-xl">DAKAHLIA</span></p>
      </div>
    </div>
  </div>



        </div>

      </div>
    </div>
  )
}
