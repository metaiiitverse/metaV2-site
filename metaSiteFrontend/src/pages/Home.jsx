import React from 'react'
import { Footer } from '../Components'
import{Hero,About,Grid,Events, Info} from "../sections/home"


const Home = () => {
  return (
    <div className='text-white relative'>
      <Hero/>
      <div className='relative w-full'>
      <About/>
      <div className='gradient-03 z-0'/>
      </div>
      <div className='relative w-full'>
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