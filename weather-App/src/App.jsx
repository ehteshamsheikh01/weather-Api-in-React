import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {
  
  
//   let inputValue = useRef();
//  let [userCity,setUserCity] = useState(null);
//  let [citiesArray,setArray] = useState([]);

// const setInputValue = () =>{
//   if(inputValue.current.value === '' || inputValue.current.value === null){
//     return
//   }
//   console.log(inputValue.current.value);
//   setUserCity(inputValue.current.value);

// }
  
  
//   useEffect(()=>{

//   async function getData() {
//     if(userCity === '' || userCity === null){
//       return
//     }
//     try{
//       console.log(userCity)
//       const Data = await axios(
//         `http://api.weatherapi.com/v1/current.json?key=88011d76a3b64bddad0195558240409&q=${userCity}&aqi=no`
//       );
//       console.log(Data.data);
//       citiesArray.push(Data.data);
//       console.log(citiesArray);
//       setArray([...citiesArray]);
//     }catch(error){
//      console.log(error) 
//     }
//   }

//   getData();

// },[userCity]);

//   return (
//     <div>
//       <h1 className="text-center text-3xl mt-[20px]">Weather Update</h1>
//       <div className="w-[500px] border-[1px] rounded-lg p-[20px] mx-auto mt-[20px]">
//         <form>
//           <input
//             type="text"
//             placeholder="Enter city name"
//             className="text-xl p-[5px] border-[1px] rounded-lg mx-auto w-full" ref={inputValue}
  
//           />
//         </form>
//         <div className="flex justify-center mt-[20px]">
//           <button className="text-lg p-[5px] border-[1px] rounded mx-auto" onClick={setInputValue}>
//             Check Weather
//           </button>
//         </div>
//       </div>
//       <div>
//         {citiesArray.length > 0 ? citiesArray.reverse().map((item,index)=>{
//           return <div key={index}>
//             <h1>{item.location.name}</h1>
//             <h1>Temperature:  {item.current.temp_c} C</h1>
//           </div>
//         }): <h1>No data</h1>}
//       </div>
//     </div>
//   );
// }








function App() {

  const [uservalue] = useRef() 
  return (
    <div>
<h1>Weather App</h1>
<form>
  <input type="text" placeholder="Enter City" ref={uservalue} />
  </form>      
  <button onClick={inputbtn}>Enter</button>
    </div>
  )
}











export default App;

