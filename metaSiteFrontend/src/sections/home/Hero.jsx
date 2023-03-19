import React from 'react'
import styles from '../../styles'
import {PlanetaryMetaBg1} from "../../assets"
import {staggeringOfContainer ,textVariations,slideingIn} from '../../utils/Animations'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-13 pl-4 my-6 `}>
      <motion.div
      variants={staggeringOfContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amoun:0.25}}
      className={`${styles.innerWd} mx-auto flex flex-col items-center relative  `}
      >
       
      <motion.h1 variants={textVariations(1.1)} className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white '>METAVERSE</motion.h1>
      <motion.div variants={textVariations(1.2)} className='flex flex-row justify-center items-center z-[1]'>

       <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>S</h1>
       <div className={`${styles.SocietyOText} flex flex-row justify-center items-center mx-auto`}>
        
        <div className='h-1/2 w-1/2  lg:h-1/3 bg-white my-auto p-1 rounded-2xl  lg:mr-3  lg:ml-2 ml-3 mr-2'></div>
        <div className='h-1/2 w-1/2  lg:h-1/3 bg-white my-auto p-1 rounded-2xl lg:ml-3 lg:mr-2 mr-3 ml-3' ></div>

       </div>
       <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>CIETY</h1>
      </motion.div>
      
      
      <motion.div  
      variants={slideingIn("right","tween",0.3,1)}
      className='relative w-full md:-mt-[48px] -mt-[8px] mx-0'>

        <div  className=' w-[76%] h-[200px] lg:h-[450px]  lg:rounded-l-[200px] rounded-l-[80px] hero-image-gradient z-[0] -top-[30px] mr-0 ml-20'>
          <img src={PlanetaryMetaBg1} alt="cover planet image" className='w-full h-full lg:rounded-l-[200px] rounded-l-[80px] object-cover '/>
        </div>
      </motion.div>

      


     
    </motion.div>
          

    </section>
  )
}

export default Hero