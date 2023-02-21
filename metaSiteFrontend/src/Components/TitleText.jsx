import React from 'react'
import{textEffects,textCharecterVariantions} from "../utils/Animations"
import { motion } from 'framer-motion'


const Titletext = ({title,textStyles}) => {
  return (
    <motion.h2 variants={textCharecterVariantions} initial="hidden" whileInView="show" className={`mt-[7px]  md:text-[64px] text-[40px] text-white ${textStyles}`}>{title}</motion.h2>
  )
}

export default Titletext