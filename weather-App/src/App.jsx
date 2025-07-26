
// ( `http://api.weatherapi.com/v1/current.json?key=88011d76a3b64bddad0195558240409&q=${userCity}&aqi=no`)

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

function App() {
        let inputValue = useRef()
        const [usercity , setusercity] = useState([])
        const [cityArry , setcityArry] = useState([])
        

        const userValue = (event) =>{
          event.preventDefault()
                if(inputValue.current.value === '' || inputValue.current.value === null){
                        return
                }
                console.log(inputValue.current.value);
                setusercity(inputValue.current.value)
                
        }
        useEffect(()=>{
        async function getData (){
                if(usercity === " " || usercity === null){
                        return
                }
                const Data =await axios (`http://api.weatherapi.com/v1/current.json?key=88011d76a3b64bddad0195558240409&q=${usercity}&aqi=no`)
                console.log(Data.data);
                cityArry.push(Data.data)
                console.log(cityArry);
                setcityArry([...cityArry])
                
                
         }
         getData()
        } , [usercity])
  return (
    <div>
      <h1 className='text-center mt-5 mx-auto text-xl font-bold'>Check Weather Update</h1>
      <div className="flex flex-col items-center p-5">
  <form className="w-full max-w-xs mb-4">
    <input
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
      type="text"
      placeholder="Enter city name"
      ref={inputValue}
    />
  </form>
  <button
    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
    onClick={userValue}
  >
    Enter
  </button>
</div>

<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
  {cityArry.length > 0 ? (
    cityArry.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-sm transition-transform transform hover:scale-105"
      >
        <h1 className="text-xl font-semibold text-gray-800">{item.location.name}</h1>
        <h2 className="text-lg text-gray-600 mt-2">{item.current.temp_c}°C</h2>    
        {/* <h2 className="text-lg text-gray-600 mt-2">{item.condition.text}</h2>     */}
      </div>
    ))
  ) : (
    <h1 className="text-xl font-bold text-gray-700">No data found</h1>
  )}
</div>
    </div>
  )
}

export default App















