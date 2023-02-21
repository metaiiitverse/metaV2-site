import React from 'react'
import { metaPerks } from '../TemporaryData'
import { motion } from 'framer-motion'
import { slideingIn } from '../utils/Animations'

const Textbox=({text,index})=>(
    <motion.div variants={slideingIn("down","spring",index*0.1,1)} initial="hidden" whileInView="show" className="text-white flex flex-col 
     bg-[rgba(255,255,255,0.1)] shadow-md shadow-white p-6 mx-5 my-2 rounded-md w-[80%]">
    <div className='w-1/2 h-1/2 rounded-full  text-white text-[15px] text-left md:text-[25px] font-semibold leading-4 z-[1]'>{index+1}</div>
    <div className='w-full text-left text-[12px] md:text-[15px] font-light text-white z-[1] mt-5'>{text}</div>
    </motion.div>
)






const WhyMeta = () => {
  return (
    <div className='flex md:flex-row flex-col w-full '>
     {metaPerks.map((elem,index)=>(
        <Textbox {...elem} index={index}/>
     ))}



    </div>
  )
}

export default WhyMeta