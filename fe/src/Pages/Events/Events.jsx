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
        <h1 data-aos="fade-right"><span id='green-text' >Events</span></h1>
        <div className="line" data-aos="fade-left"></div>
      </div>
      <div className="container flex justify-around items-center">
        <div className="events-left">
          {
            eventsList.map(event=>{
              return(
              <>
                <div data-aos="fade-right"  key={event.id}>
                  <div className="row mt-5">

                    <div className="preview-card">
                      <div className="wrp">
                        <div className="item swiper-slide">
                          <div className="img">
                            <img src={event.eventImg} alt=""/>
                          </div>
                          <div className="content">
                            <span className="code">{event.date}</span>
                            <div className="title">{event.title}</div>
                            <div className="text">{event.description}</div>
                          </div>
                        </div>

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
