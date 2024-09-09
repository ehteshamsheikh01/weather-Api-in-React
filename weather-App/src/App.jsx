
// ( `http://api.weatherapi.com/v1/current.json?key=88011d76a3b64bddad0195558240409&q=${userCity}&aqi=no`)

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

function App() {
        let inputValue = useRef()
        const [usercity , setusercity] = useState(null)
        const [cityArry , setcityArry] = useState([])
        

        const userValue = () =>{
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
                const Data =await axios ( `http://api.weatherapi.com/v1/current.json?key=88011d76a3b64bddad0195558240409&q=${usercity}&aqi=no`)
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
      <div className='text-center mt-5 mx-auto'>
        <form>
                <input className='border-[1px]' type="text" placeholder='Enter city Name' ref={inputValue} />
        </form>
        <button className='border-[2px] mt-5' onClick={userValue}>Enter</button>
      </div>
      {cityArry.length > 0 ? cityArry.reverse().map((item , index)=>{
         return <div key={index}>
                <h1>{item.location.name}</h1>
                <h1>{item.current.temp_c}</h1>
         </div>
      }) : <h1>No data found</h1> }
    </div>
  )
}

export default App















