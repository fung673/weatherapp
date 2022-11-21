import react from 'react'
import { useState } from "react";
import { useEffect } from "react";
import forecastIcon from './forecastIcon';


export default function Forecast() {
  const [weather2, setWeather2] = useState([])
  const [Icon, setIcon] = useState(forecastIcon)
  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
      .then(res => res.json())
      .then(data => setWeather(data))
  }, [])


  useEffect(() => {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc")
      .then(res => res.json())
      .then(data => setWeather2(data))
  }, [])

  var forecast = weather2?.weatherForecast
  var weekarray = []
  for (var i = 0; i < forecast?.length; i++) {
    weekarray.push(forecast[i])
  }

  var nextday = weekarray[0]
  var nextday2 = weekarray[1]
  var nextday3 = weekarray[2]
  var nextday4 = weekarray[3]
  var nextday5 = weekarray[4]
  var nextday6 = weekarray[5]
  var nextday7 = weekarray[6]
  var nextday8 = weekarray[7]
  var nextday9 = weekarray[8]

  var dayIcon = nextday?.ForecastIcon

  function matchIcon(a) {
    for (var i = 0; i < Icon.data.length; i++) {
      if (Icon.data[i].id === a) { return (<img className="littleIcon" src={Icon.data[i].url} />) }
    }
  }
  var Day1
  function Date(theNextDay) {
    Day1 = theNextDay?.forecastDate
    Day1 = Day1?.slice(4).split('')
    Day1?.splice(2, 0, '月').splice(5, 0, "日")
    Day1?.splice(5, 0, "日")
    var editedWord = Day1?.join('')
    return editedWord
  }

  Date()







  return <div className='forecast-main'>
    <ul className='forecast-container'>
      <li className='dayobject'><h2>{Date(nextday)}<br />{nextday?.week}</h2> {matchIcon(nextday?.ForecastIcon)}{nextday?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday2)}<br />{nextday2?.week}</h2> {matchIcon(nextday2?.ForecastIcon)}{nextday2?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday3)}<br />{nextday3?.week}</h2> {matchIcon(nextday3?.ForecastIcon)}{nextday3?.forecastWeather}</li></ul>
    <ul className='forecast-container'>
      <li className='dayobject'><h2>{Date(nextday4)}<br />{nextday4?.week}</h2> {matchIcon(nextday4?.ForecastIcon)}{nextday4?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday5)}<br />{nextday5?.week}</h2> {matchIcon(nextday5?.ForecastIcon)}{nextday5?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday6)}<br />{nextday6?.week}</h2> {matchIcon(nextday6?.ForecastIcon)}{nextday6?.forecastWeather}</li></ul>
    <ul className='forecast-container'>
      <li className='dayobject'><h2>{Date(nextday7)}<br />{nextday7?.week}</h2> {matchIcon(nextday7?.ForecastIcon)}{nextday7?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday8)}<br />{nextday8?.week}</h2> {matchIcon(nextday8?.ForecastIcon)}{nextday8?.forecastWeather}</li>
      <li className='dayobject'><h2>{Date(nextday9)}<br />{nextday9?.week}</h2> {matchIcon(nextday9?.ForecastIcon)}{nextday9?.forecastWeather}</li>
    </ul>
    <div className="updateTime">
      <h1 className="time-title">最後更新時間</h1>
      <h2>{weather.updateTime?.replace('T', ' ').slice(0, 19)}</h2></div>
  </div>
}