import React from 'react';
import Top from './component/top';
import './App.css';

/**const url = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc"
async function getInfo() {
  const response = await fetch(url)
  const data = await response.json()
  const forecastDesc = data.forecastDesc;
  console.log(forecastDesc)
  return forecastDesc
}

getInfo()**/



export default function App() {


  return (
    <div>
      <Top />
    </div>
  )


}

