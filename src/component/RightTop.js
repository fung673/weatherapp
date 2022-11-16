import React from 'react'
import { useState } from "react";
import { useEffect } from "react";


export default function Righttop() {

  const [weather3, setWeather3] = useState([])

  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc")
      .then(res => res.json())
      .then(data => setWeather3(data))
  }, [])

  const com = weather3.humidity
  const humidity = com?.data[0].value
  const com2 = weather3.temperature
  const temp = com2?.data[22].value

  return <div className='right-top-main'>
    <div className='gradient-border' id="box">
      <div className='humi'>現時濕度: {humidity}%</div>
      <div className='temp'>現時氣溫: {temp}°C</div>
    </div>
  </div>

}