import React from 'react'
import Navbar from '../../Components/Navbar'
import teamMembers from './teamMembers.js'
import './style.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Team() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <>
      <Navbar/>
      <div className="about flex text-white justify-around items-center">
        <h1 data-aos="fade-right"><span id='green-text'>Our Team</span></h1>
        <div className="line" data-aos="fade-left"></div>
      </div>
      <div>
        <div className='team-details'>
          {
            teamMembers.map(member=>{
              return(
                <>
                  <article className="card" data-aos="fade">
                    <img className="card__background" width="1920" height="2193" src={member.profileImg} alt="" />
                    {/* <video className="card__background" width={100} src={member.profileImg} muted autoPlay loop /> */}
                    <div className="card__content | flow">
                      <div className="card__content--container | flow">
                        <h2 className="card__title" id="title">{member.name}</h2>
                        <p className="card__description" id="description">
                          {member.position}
                        </p>
                      </div>
                      <div className="flex">
                        <a href={member.instagramURL} className='card__button m-1'><AiOutlineInstagram className='text-white text-lg'/></a>
                        <a href={member.linkedinURL} className='card__button m-1'><AiOutlineLinkedin className='text-white text-lg'/></a>
                        <a href={member.githubURL} className='card__button m-1'><AiOutlineGithub className='text-white text-lg'/></a>
                      </div>
                    </div>
                  </article>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
