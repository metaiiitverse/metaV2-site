import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import bgVideo from '../assets/walking.mp4'
import './style.css'
import { FaWpexplorer } from 'react-icons/fa'
import { MdSwitchAccessShortcut } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiUserCheck } from 'react-icons/bi'
import { BsRocketTakeoff } from 'react-icons/bs'
import Lottie from 'lottie-react'
import animation from '../assets/animation.json'
import img1 from '../assets/Future city.jpg'
import img2 from '../assets/Madness.jpg'
import img3 from '../assets/virtual-lands-1.jpg'
import img4 from '../assets/vrgaming.jpg'
import img5 from '../assets/nft.jpg'
import logo from '../assets/Asset-removebg-preview.png'
import vrglass from '../assets/vrglass.json'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="container" id='container'>
          <div>
              <div className=" video overlay overflow-hidden"></div>
              <video src={bgVideo} autoPlay muted loop />
          </div>
          <div className="heroSection text-white flex justify-center flex-col items-center w-screen" id='hero'>
            <h1>Join with us into <span id='metaText' >Metaverse</span> </h1>
            <button className='swipe-btn border-solid border-2 pl-6 pr-6 pt-2 pb-2 rounded-3xl mt-3' id='swipe-btn' >Swipe Down</button>
          </div>
        </div>
        <div className="section1 hero-image">
          <div className=" text-white text-center mt-10">
            <h2 className='text-2xl section-text' id='head' > <span id='metaText'>Meta</span> chapter <span id='metaText'>Mega</span> opening</h2>
            <p className='text-xs mt-2'>Buckle up to kick- start your jouney and be the part of the internet <span id='metaText'>revolution</span></p>
          </div>
          <motion.div 
            className="box1 text-white p-4 m-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWpexplorer className='text-3xl m-auto mt-4'  />
            <div className="text flex flex-col justify-center items-center mt-2">
              <h4>Explore</h4>
              <p className='text-center mt-2' >plethora of unexplored platforms as this is a relatively new domain .</p>
            </div>
          </motion.div>
          <motion.div className="box2 text-white p-4 m-7" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MdSwitchAccessShortcut className='text-3xl m-auto mt-4'  />
            <div className="text flex flex-col justify-center items-center mt-2">
              <h4>Equippe</h4>
              <p className='text-center mt-2' >equipping yourself with meta will contribute to you becoming thorough with tech in the future.</p>
            </div>
          </motion.div>
          <motion.div 
            className="box3 text-white p-4 m-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CgProfile className='text-3xl m-auto mt-4'  />
            <div className="text flex flex-col justify-center items-center mt-2">
              <h4>Meet</h4>
              <p className='text-center mt-2' >Meet and engage with meta and blockchian enthusiasts</p>
            </div>
          </motion.div>
          <motion.div 
            className="box4 text-white p-4 m-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiUserCheck className='text-3xl m-auto mt-4'  />
            <div className="text flex flex-col justify-center items-center mt-2">
              <h4>Skills</h4>
              <p className='text-center mt-2' >Gain skills to become a kickass developer.</p>
            </div>
          </motion.div>
          <motion.div 
            className="box5 text-white p-4 m-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsRocketTakeoff className='text-3xl m-auto mt-4'  />
            <div className="text flex flex-col justify-center items-center mt-2">
              <h4>Participate</h4>
              <p className='text-center mt-2' >compete and learn via blockchain events and contests.</p>
            </div>
          </motion.div>
          <div className="animation">
            <Lottie animationData={animation} style={{height:"auto",width:500}} />
          </div>
        </div>
        <div className="section2">
          <div className="head-text text-white">
            <h1 className=' text-center'><span id='metaText'>Scope</span> for Metaverse</h1>
            <p className='text-xs mt-1 text-center'>Plethora of Oppurtunities</p>
          </div>
          <div className="images flex justify-around items-center m-3">
            <div className="img1 m-2" >
              <img src={img1} alt="" />
            </div>
            <div>
              <div className="img2 m-2">
                <img src={img2} alt="" />
              </div>
              <div className="img2 m-2">
                <img src={img3} alt="" />
              </div>
            </div>
            <div>
              <div className="img2 m-2">
                <img src={img4} alt="" />
              </div>
              <div className="img2 m-2">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section3 text-white flex justify-around items-center">
          <div className="home-left">
            <Lottie animationData={vrglass} id='vrglass' style={{height:"auto",width:500}} />
          </div>
          <div className="home-right flex justify-center items-center flex-col">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-32 cursor-pointer' src={logo} alt="" />
            <h1>METAVERSE</h1>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> <Link to='/contact'>Join Now</Link> </motion.button>
          </div>
        </div>
        <Footer className='footer' />
    </>
  )
}
