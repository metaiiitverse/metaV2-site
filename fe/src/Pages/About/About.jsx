import React from 'react'
import Navbar from '../../Components/Navbar'
import './style.css'
import Lottie from 'lottie-react'
import about from './about.js'

export default function About() {
  return (
    <>
      <Navbar/>
      <div className="about flex text-white justify-around items-center">
        <h1 data-aos="fade-right"><span id='green-text'>About</span> us</h1>
        <div className="line" data-aos="fade-left"></div>
      </div>
      <div className="main-section  text-white pl-5 pr-5 ml-2 mr-2">
        <div className="about-left">
          <p className='mt-5' data-aos="fade-right">Welcome to the Metaverse Society, a dynamic and immersive community where the boundaries between the physical and virtual worlds blur to create a new realm of possibilities. In this vibrant society, we are on a collective journey to explore, create, and thrive within the realms of augmented reality (AR), virtual reality (VR), and blockchain technology. Our mission is to empower individuals with the knowledge and skills to navigate and contribute to these transformative technologies.</p>
        </div>
        <div className="activities">
          <h1 className=' text-3xl mt-5 underline' id='green-text' data-aos="fade">Activities within the Metaverse Society:</h1>
          {
            about.map(detail=>{
              return(
                <>
                  <div data-aos="fade-right"  key={detail.id}>
                  <div className="row mt-5">

                    <div className="preview-card">
                      <div className="wrp">
                        <div className="item swiper-slide">
                          <div className="img">
                            <Lottie animationData={detail.animation} style={{height:"auto",width:300,zIndex:10,padding:10}} />
                          </div>
                          <div className="content">
                            <div className="title">{detail.title}</div>
                            <div className="text">{detail.description}</div>
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
    </>
  )
}
