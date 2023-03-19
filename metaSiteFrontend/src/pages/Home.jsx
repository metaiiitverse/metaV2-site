import React from 'react'
import { Footer } from '../Components'
import{Hero,About,Grid,Events, Info} from "../sections/home"


const Home = () => {
  return (
    <div className='text-white relative lg:overflow-x-hidden w-[100vw]'>
      <Hero/>
      <div className='relative '>
      <About/>
      <div className='gradient-03 z-0'/>
      </div>
      <div className='relative '>
      <Grid/>
      <div className='gradient-04 z-0'/>
      <Info/>
      <div className='gradient-04 z-0'/>
      <Events/>
      <div className='gradient-04 z-0'/>
      <Footer/>
      </div>
    </div>
  )
}


export default Home