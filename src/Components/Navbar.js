import React from 'react'
import img from '../Images/png.png'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={img} alt="" />
        <h4>MyWeather.</h4>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
