import React from 'react'
import Navbar from '../../Components/Navbar'
import animation from '../assets/events.json'
import Lottie from 'lottie-react'
import EventList from '../../Components/EventList'

export default function Events() {
  return (
    <div>
      <Navbar/>
      <div className="about flex text-white justify-around items-center">
        <h1><span id='green-text'>Events</span></h1>
        <div className="line"></div>
      </div>
      <div className="container flex justify-around items-center">
        <div className="events-left ml-10">
          <EventList/>
          <EventList/>
          <EventList/>
          <EventList/>
        </div>
        <div className="events-right mr-10 fixed left-5 top-60">
          <Lottie animationData={animation} style={{height:"auto",width:200}} />
        </div>
      </div>
    </div>
  )
}
