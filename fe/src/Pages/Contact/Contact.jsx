import React from 'react'
import Navbar from '../../Components/Navbar'
import logo from '../../Components/1x/Asset.png'
import '../Contact/style.css'

export default function Contact() {
  return (
    <div className='contact-section'>
      <Navbar/>
      <div className=' contact-div flex justify-around items-center p-5 mt-5 text-white'>
        <div className="left p-16">
          <h1>Want to explore <span id='green-text'>limitless</span> possibilities?</h1>
          <p className='text-xs '>Enter the metaverse and connect with like-minded individuals who share your passions. Join us now!" - Join us to connect with a global community of like-minded individuals who share your interests and passions in the metaverse.</p>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <div className="logo w-32">
            <img src={logo} alt="" />
          </div>
          <div className="form flex flex-col">
            <input type="text" placeholder='Your Name' className='form-text p-2 w-72 rounded-lg m-3' />
            <input type="email" placeholder='Your Email' className='p-2 w-72 rounded-lg m-3' />
            <button className=' btn p-2 m-3 w-72 text-white'>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}
