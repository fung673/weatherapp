import react from 'react'
import { useState } from "react";
import { useEffect } from "react";
import '../images/temp.png'
import '../images/warn.png'

export default function Warn() {
 const [weather3, setWeather3] = useState([])
 const [box, setBox] = useState(true)

 useEffect(() => {
  fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc")
   .then(res => res.json())
   .then(data => setWeather3(data))
 }, [])

 function handleClick1() {
  if (box) {
   setBox(false)
  }
 }

 function handleClick() {
  if (!box) {
   setBox(true)
  }
 }

 function handleClick3() {
  if (box) {
   setBox(false)
  }
  else {
   setBox(true)
  }
 }

 const com = weather3.humidity
 const humidity = com?.data[0].value
 const com2 = weather3.temperature
 const temp = com2?.data[22].value


 return <div className='device'>
  <div className='navbar'>
   <ul className='nodot'>
    <a className='home' onClick={handleClick}><img src={require('../images/temp.png')} className='homepng' /> 溫度及濕度</a>
    <a className='warn' onClick={handleClick1}><img src={require('../images/warn.png')} className='warnpng' /> 特別天氣警報</a>
   </ul>
   {box ? <div className='right-top-main'>
    <div className='gradient-border' id="box">
     <div className='humi'>現時濕度: {humidity}%</div>
     <div className='temp'>現時氣溫: {temp}°C</div>
    </div></div> :
    <div className='right-top-main2'>
     <div className='gradient-border' id="box2">
      <div>現時沒有特殊天氣警報</div>
     </div>
    </div>}
  </div>
  <div className='navbar2'><ul className='nodot'>
   <a className='home' onClick={handleClick}><img src={require('../images/temp.png')} className='homepng' /> 溫度及濕度</a>
   <a className='warn' onClick={handleClick1}><img src={require('../images/warn.png')} className='warnpng' /> 特別天氣警報</a>
  </ul> {box ? <div className='right-top-main'>
   <div className='gradient-border' id="box">
    <div className='humi'>現時濕度: {humidity}%</div>
    <div className='temp'>現時氣溫: {temp}°C</div>
   </div></div> :
   <div className='right-top-main2'>
    <div className='gradient-border' id="box2">
     <div>現時沒有特殊天氣警報</div>
    </div>
   </div>}
  </div><div className='navbar3'><ul className='nodot'>
   <a className='home' onClick={handleClick}><img src={require('../images/temp.png')} className='homepng' /> 溫度及濕度</a>
   <a className='warn' onClick={handleClick1}><img src={require('../images/warn.png')} className='warnpng' /> 特別天氣警報</a>
  </ul> {box ? <div className='right-top-main3' onClick={handleClick3}>
   <div className='gradient-border' id="box">
    <div className='humi'>現時濕度: {humidity}%</div>
    <div className='temp'>現時氣溫: {temp}°C</div>
   </div></div> :
   <div className='right-top-main3' onClick={handleClick3}>
    <div className='gradient-border' id="box2">
     <div>現時沒有特殊天氣警報</div>
    </div>
   </div>}</div>


 </div>





}