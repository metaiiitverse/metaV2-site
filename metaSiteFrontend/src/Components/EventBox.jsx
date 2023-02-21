import React from 'react'
import { motion } from 'framer-motion'
import { slideingIn } from '../utils/Animations' 

const EventBox = ({EventName,date,descriptiom,imgUrl,index}) => {
  return (
    <motion.div variants={slideingIn("up","spring",index*0.3,1)}   initial="hidden"
    whileInView="show"  className="flex min-h-[44px] mt-4 gap-3 w-[80%] border-b-white border-b-[1px]">
    <div className='w-1/4 h-full rounded-full flex justify-center items-center'>
        <img src={imgUrl} alt=" EventImage"  className='lg:w-1/2 lg:h-1/2 w-full h-full object-contain rounded-full'/>
    </div>
    <div className='p-6 w-3/4 h-full mx-3 text-left md:text-[24px] text-white'>
        <h2 className='text-[19px] md:text-[27px] font-bold'>{EventName}</h2>
        <p className='text-slate-100 font-light text-[9px] md:text-[15px]'>{date}</p>
        <p className='text-white text-[12px] font-semibold md:text-[18px]'>{descriptiom}</p>

    </div>


    </motion.div>
  )
}

export default EventBox