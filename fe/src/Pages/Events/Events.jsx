import React from 'react'
import Navbar from '../../Components/Navbar'
import eventsList from './eventsList.js'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Events() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
      <Navbar/>
      <div className="about flex text-white justify-around items-center">
        <h1><span id='green-text'>Events</span></h1>
        <div className="line"></div>
      </div>
      <div className="container flex justify-around items-center">
        <div className="events-left">
          {
            eventsList.map(event=>{
              return(
              <>
                <div className="card m-3" key={event.id} data-aos="fade">
                  <div className="row ">
                    <div className="eventcard">
                      <div className="col-md-7 px-3">
                        <div className="card-block px-6">
                          <h3 className="card-title text-xl">{event.title}</h3>
                          <p className="card-text text-gray-400">{event.description} </p>
                        </div>
                      </div>
                      <div className="event-img">
                        <img src={event.eventImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
