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
                <div class="container">
                  <div class="row mt-5">

                    <div class="preview-card">
                      <div class="preview-card__wrp">
                        <div class="preview-card__item swiper-slide">
                          <div class="preview-card__img">
                            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""/>
                          </div>
                          <div class="preview-card__content">
                            <span class="preview-card__code">26 December 2019</span>
                            <div class="preview-card__title">Lorem Ipsum Dolor</div>
                            <div class="preview-card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                            <a href="/" class="preview-card__button">READ MORE</a>
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
