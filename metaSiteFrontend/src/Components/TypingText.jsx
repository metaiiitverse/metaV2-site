import React from 'react'
import{textEffects,textCharecterVariantions} from "../utils/Animations"
import { motion } from 'framer-motion'


const TypingText = ({title,TextStyle}) => {
  return (
    <motion.p
    variants={textEffects}
    className={` text-white ${TextStyle} mb-4`}
    >
    {Array.from(title).map((char,index)=>(
        <motion.span variants={textCharecterVariantions} key ={index}>{char}</motion.span>
    ))}
  </motion.p>
  )
}

export default TypingText