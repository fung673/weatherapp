import react from 'react'
import { useState } from "react";
import { useEffect } from "react";
import '../images/homepage.png'
import '../images/warn.png'

export default function Warn() {
 return <div className='navbar'>
  <ul className='nodot'>
   <a className='home' href='https://fung673.github.io/weatherapp/'><img src={require('../images/homepage.png')} className='homepng' /> 主頁</a>
   <a className='warn'><img src={require('../images/warn.png')} className='warnpng' /> 特別天氣警報</a>
  </ul></div>





}