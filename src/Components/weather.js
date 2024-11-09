import React from 'react'
import { FaSearch } from 'react-icons/fa';
function Weather() {
const url="https://api.openweathermap.org/data/2.5/weather?&appid=c5cfaca61133ecd387db8e0bfc086045&units=metric&q=chennai";
    const fetchWeather=()=>{
        try{
            const result=axios.get(url);

        }catch(err){
            console.message(err)
        }
    }

  return (
    <>
  <div className="w-screen h-screen m-0 p-0 flex items-center justify-center " style={{ backgroundColor: "#133E87" }}>
  <div className="p-6 w-full h-full md:h-[500px] md:w-[400px] rounded-xl justify-center shodow-xl shadow-black text-center bg-Eggshell shadow-lg">
    <h2 className="font-bold text-lg md:text-3xl py-3">Weather App</h2>
    <div className="relative">
      <input
        type="text"
        className="border focus:ring-2 focus:ring-steelBlue border-steelBlue bg-Pale_Powder_Blue rounded-lg p-4 pl-8 w-[320px] h-[45px] focus:bg-transparent outline-none"
        placeholder="Search city" onChnage={handleChange}
      />
      <FaSearch size={20} className=" ml-2 absolute left-4 top-1/2 transform -translate-y-1/2 text-steelBlue" />
    </div>

    <div className="py-3 w-[200px] h-[150px] flex justify-center items-center mx-auto">
      <img
        src=""
        alt="weatherImg"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
    <p className="py-3 text-center font-bold text-lg ">Rain</p>
    <div className="flex p-4 justify-between bg-[#F4F1E1] rounded-xl shadow-md">
      <div className="text-center text-lg font-semibold text-gray-800">
        <p>Wind</p>
      </div>
      <div className="text-center text-lg font-semibold text-gray-800">
        <p>Sea</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Weather