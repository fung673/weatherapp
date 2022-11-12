import React from "react"
import { useState } from "react";
import { useEffect } from "react";

export default function Top() {

  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
      .then(res => res.json())
      .then(data => setWeather(data))
  }, [])

  const [weather2, setWeather2] = useState([])

  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc")
      .then(res => res.json())
      .then(data => setWeather2(data))
  }, [])

  console.log(weather2)


  return <div className="main">
    <div className="top">
      <div className="todays">
        <h1 className="title">現時天氣</h1>
        <h2>{weather.generalSituation}</h2></div>
      <div className="tmr">
        <h1 className="title">明日天氣</h1>
        <h2>{weather.forecastDesc}</h2></div>
      <div className="future">
        <h1 className="title">未來幾日天氣</h1>
        <h2>{weather2.generalSituation}</h2></div>
    </div>


    <div className="updateTime">
      <h1 className="time-title">更新時間</h1>
      <h2>{weather.updateTime}</h2></div>
  </div>

}