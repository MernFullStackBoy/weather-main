import React, { useCallback, useEffect, useState } from 'react'
import "../firebase/config"
import { getAuth, signOut } from "firebase/auth"
import axios from 'axios'

const Weather = () => {

    function handleSignOut() {
        signOut(getAuth()).then(() => alert("You signed out"))
            .catch(err => {
                throw new Error(err)
            })
    }

    const [country, setCounty] = useState("")

    let api_key = "96b947a45d33d7dc1c49af3203966408"

    const [loader, setLoader] = useState(false)

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${api_key}`

    const [weather, setWeather] = useState({
        "coord": { "lon": 63.8491, "lat": 41.7075 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "base": "stations", "main": { "temp": 13.58, "feels_like": 12.46, "temp_min": 13.58, "temp_max": 13.58, "pressure": 1020, "humidity": 56, "sea_level": 1020, "grnd_level": 998 }, "visibility": 10000, "wind": { "speed": 4.27, "deg": 68, "gust": 4.61 }, "clouds": { "all": 31 }, "dt": 1710137797, "sys": { "country": "UZ", "sunrise": 1710122587, "sunset": 1710164775 }, "timezone": 18000, "id": 1512440, "name": "Uzbekistan", "cod": 200
    })

    function weatherMap(e) {
        e.preventDefault()
        setLoader(true)
        axios.get(api).then(res => {
            setWeather(res.data)
            setCounty("")
            setLoader(false)
        }).catch(err => {
            alert("Wrong city name")
            setCounty("")
            setLoader(false)
        })
    }

    const obj = {}

    return (
        <div className=' bg-beauty w-[100%] h-[100vh] bg-cover '>

            <div className={` ${loader ? "flex" : "hidden"} justify-center items-center w-[100%] h-[100vh] absolute backdrop-brightness-[0.1] z-10 `}>
                <div className=' w-[70px] animate-spin border-t-transparent h-[70px] border-[7px] rounded-[50%] '></div>
            </div>

            <button onClick={handleSignOut} className=' fa-solid fa-right-from-bracket absolute phone:text-[20px] text-white phone:top-30px z-10  text-[40px] '>
            </button>
            <form onSubmit={weatherMap} className=' phone:bg-nature mx-auto max-w-[450px] p-4 h-[100vh] ] backdrop-blur-[12px] '>
                <input value={country} onChange={(e) => setCounty(e.target.value)} placeholder='Enter city or country' type="text" className=' w-[100%] h-[50px] bg-transparent border-b-[5px] mt-3 outline-none text-white pl-3 font-semibold  text-[20px] ' />
                <button className=' fas fa-search absolute mt-5 text-white text-[30px] right-7 '></button>
                {new Array(weather).map(item => (
                    <div key={item.id} className=' phone:relative phone:bottom-[20px] phone:backdrop-blur-[10px] phone:max-h-[280px] max-w-[400px] h-[400px] bg-opacity-[0.4] rounded-[20px] mx-auto mt-[100px] bg-black '>
                        <div className=' w-[100px] phone:w-[80px] phone:h-[80px] h-[100px] bg-black rounded-[50%] mx-auto relative bottom-[50px] '>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                        </div>
                        <h4 className=' phone:relative bottom-[30px] text-center phone:text-[20px] text-white font-semibold text-[25px] '>{item.name}, {item.sys.country}</h4>
                        <h1 className=' font-bold text-center text-[100px] phone:text-[80px] phone:relative phone:bottom-8 text-white '>{item?.main?.temp.toFixed() + " C"}</h1>
                        <h3 className=' text-white phone:text-[25px] phone:relative bottom-6 text-center font-semibold text-[30px] '>{item?.weather[0]?.main}</h3>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Weather