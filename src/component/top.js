import React from "react"
import { useState } from "react";
import { useEffect } from "react";

export default function Top(props) {

  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
      .then(res => res.json())
      .then(data => setWeather(data))
  }, [])



  return <div>
    <h1 className="Today">今天天氣</h1>
    <h2 className="weather">{weather.generalSituation}</h2>
    <h1 className="future">近日天氣</h1>
    <h2 className="future-weather">{weather.forecastDesc}</h2>
  </div>
}