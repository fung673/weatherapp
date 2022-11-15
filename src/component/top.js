import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import '../images/cloud.png'
import '../images/rain.png'

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

  const data = weather

  const tmr = weather.forecastDesc
  const tdy = weather.generalSituation
  var tmrIcon = []
  var tmrCloud = false
  var tmrRain = false
  var tdyIcon = []
  var tdyCloud = false
  var tdyRain = false
  for (let i = 0; i < tmr?.length; i++) {
    if (tmr[i] === '雲') { tmrCloud = true }
    if (tmr[i] === '雨') { tmrRain = true }
  }
  for (let i = 0; i < tdy?.length; i++) {
    if (tdy[i] === '雲') { tdyCloud = true }
    if (tdy[i] === '雨') { tdyRain = true }
  }
  if (tmrCloud === true) {
    tmrIcon.push('cloud')
  } if (tmrRain === true) {
    tmrIcon.push('rain')
  }
  else { tmrIcon = [] }

  if (tdyCloud === true) {
    tdyIcon.push('cloud')
  } if (tdyRain === true) {
    tdyIcon.push('rain')
  }
  else { tdyIcon = [] }

  function checkTmrIcon() {
    for (let i = 0; i < tmrIcon.length; i++) {
      if (tmrIcon[i] === 'cloud' && 'rain') {
        return [<img src={require("../images/cloud.png")} className="cloud-icon" alt="cloud-icon" />,
        <img src={require("../images/rain.png")} className="rain-icon" alt="rain-icon" />]
      }
    }
  }

  function checkTdyIcon() {
    for (let i = 0; i < tdyIcon.length; i++) {
      if (tdyIcon[i] === 'cloud' && 'rain') {
        return [<img src={require("../images/cloud.png")} className="cloud-icon" alt="cloud-icon" />,
        <img src={require("../images/rain.png")} className="rain-icon" alt="rain-icon" />]
      }
    }
  }

  return <div className="main">
    <div className="top">
      <div className="todays">
        <h1 className="title">現時天氣 {checkTdyIcon()}</h1>
        <h2>{weather.generalSituation}</h2></div>
      <div className="tmr">
        <h1 className="title">明日天氣 {checkTmrIcon()} </h1>
        <h2>{weather.forecastDesc}</h2></div>
      <div className="future">
        <h1 className="title">未來幾日天氣</h1>
        <h2>{weather2.generalSituation}</h2></div>
    </div>


    <div className="updateTime">
      <h1 className="time-title">最後更新時間</h1>
      <h2>{data.updateTime?.replace('T', ' ').slice(0, 19)}</h2></div>
  </div>

}