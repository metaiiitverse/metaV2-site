import React from 'react'
import styles from '../styles'
import { fadeIn} from '../utils/Animations'
import { motion } from 'framer-motion'

const ScopeCards = ({id,imageUrl,title,index,active,handleClick}) => {
  return (
    <motion.div
     variants={fadeIn("right","spring",index*0.5,0.75)}
     className={`relative ${active===id?'md:flex-[3.5] flex-[15]':'md:flex-[0.5] flex-[5]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.4s] ease-out-flex cursor-pointer text-white`}  
    onClick={handleClick}
    >  <img src={imageUrl} alt={title} className="absolute w-full h-full rounded-lg md:rounded-[24px]" onClick={handleClick}/> 
    
     {active!==id? (
        <h3 className='font-semobold absolute z-1 lg:bottom-20 lg:rotate-[-90deg] md:origin-[0,0] text-white text-[14px] md:text-[34px]'>{title}</h3>
     ):(<div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]' >

        <p className='font-normal uppercase lg:text-[20px] lg:leading-[20px] text-[14px]  text-white'>
            Enter the Metaverse
        </p>
        <h3 className='font-normal text-[10px] lg:text-[24px] lg:mt-[24px] leading-3 text-white'>{title}</h3>
     </div>)}
    
     </motion.div>
    
  )
}

export default ScopeCards