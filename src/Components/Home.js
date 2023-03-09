import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../Redux/actions/fetchAction'
import img from '../Images/png.png'
import video from '../Images/video.mp4'
export default function Home() {

  const dispatch = useDispatch()
  const [cityName, setCityName] = useState('Mumbai')
  const [input,setInput] = useState('')

  const onChange = (e)=>{
    setInput(e.target.value)
  }

  const handleClick = (e)=>{
    e.preventDefault()
    if(input === ''){
      return
    }
    else{
      setCityName(input)
      setInput('')
    }
  }

  useEffect(() => {
    dispatch(fetchWeather(cityName))
  }, [cityName])

  const data = useSelector((state) => state.fetchReducer)
  return (
    <div className='home'>
      <div className="left">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
            </video>
            <div className="info">
              <h1>{data.temp}&#8451;</h1>
              <h3>Wind Speed - {data.wind_speed} km</h3>
              <p>City - {cityName}</p>
            </div>
          </div>
          <div className="right">
            <div className="txtbox">
              <h1>Weather App <img src={img} alt="" />
              </h1>
              <p>Simple, Easy and able to present climate condition of any city. </p>
              <input type="text" placeholder='Enter city...' value={input} name={input} onChange={onChange} />
              <button onClick={handleClick}>Search</button>
            </div>

          </div>
      </div>
      )
}
