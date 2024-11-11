import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
// import _ from 'lodash';
import wind from "../assets/wind.png";
import sea from "../assets/sea.jpg";
import weatherReport from "../assets/weathe.webp";
function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?&appid=c5cfaca61133ecd387db8e0bfc086045&units=metric&q=${city}`;

    try {
      const result = await axios.get(url);
      console.log("API response:", result); // Check if API returns data
      setWeather(result.data); // Set weather data if API request is successful
    } catch (err) {
      console.error("Error fetching weather data:", err); // Log any errors
    }
  };

  console.log("Weather data:", weather); // This should display weather data if it is set

  // useEffect(()=>{
  //   if(city){
  //     fetchWeather();
  //   }
  // },[city])

  // const debouncedFetchWeather=_.debounce(fetchWeather,1000);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    // debouncedFetchWeather();
  };

  return (
    <>
      <div
        className="mx-auto px-4 min-h-screen sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center"
        style={{ backgroundColor: "#133E87" }}
      >
        <div className="p-6 m-5 w-full h-screen md:h-auto md:max-w-md rounded-xl flex flex-col items-center shadow-xl shadow-black text-center bg-[#F4F1E1]">
          <h2 className="font-bold text-xl md:text-3xl py-3">Weather App</h2>

          <div className="relative flex gap-4 w-full justify-center">
            <input
              type="text"
              className="border focus:ring-2 focus:ring-blue-300 border-blue-300 bg-blue-50 rounded-lg p-3 pl-8 w-[75%] md:w-[320px] h-12 focus:bg-white outline-none text-sm md:text-base"
              placeholder="Search city"
              value={city}
              onChange={handleCityChange}
            />
            <button
              onClick={fetchWeather}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-lg text-sm md:text-base"
            >
              Get Weather
            </button>
          </div>

          <div className="py-3 w-11/12 md:w-[200px] h-auto p-4 flex justify-center items-center mx-auto">
            <img
              src={weatherReport}
              alt="Weather Image"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {weather ? (
            <>
              <p className="text-lg md:text-xl font-semibold mt-2">
                {weather.main?.temp}°C
              </p>
              {weather.weather?.map((e, index) => (
                <p key={index} className="py-2 text-center font-bold text-lg">
                  {e.main}
                </p>
              ))}
            </>
          ) : null}

          <div className="grid  grid-cols-2 gap-4  w-full md:max-w-md mt-4">
            {/* Wind Section */}
            <div className="bg-[#F4F1E1] rounded-lg p-4 shadow-md text-gray-800">
              <h2 className="font-bold text-lg text-center mb-2">Wind</h2>
              <div className="flex justify-center items-center mb-2">
                <img
                  src={wind}
                  className="w-14 h-auto object-contain"
                  alt="Wind Icon"
                />
              </div>
              {weather && (
                <>
                  <p className="text-center">
                    <span className="font-semibold">Speed:</span>{" "}
                    {weather.wind.speed} m/s
                  </p>
                  <p className="text-center">
                    <span className="font-semibold">Direction:</span>{" "}
                    {weather.wind.deg}°
                  </p>
                </>
              )}
            </div>

            {/* Sea Section */}
            <div className="bg-[#F4F1E1] rounded-lg p-4 shadow-md text-gray-800">
              <h2 className="font-bold text-lg text-center mb-2">Sea</h2>
              <div className="flex justify-center items-center mb-2">
                <img
                  src={sea}
                  className="w-14 h-auto object-contain"
                  alt="Sea Icon"
                />
              </div>
              {weather && weather.main && (
                <>
                  <p className="text-center">
                    <span className="font-semibold">Sea Level:</span>{" "}
                    {weather.main.sea_level || "N/A"}
                  </p>
                  <p className="text-center">
                    <span className="font-semibold">Pressure:</span>{" "}
                    {weather.main.pressure} hPa
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
