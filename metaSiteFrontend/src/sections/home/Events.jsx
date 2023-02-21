import React from 'react';
import {
  staggeringOfContainer,
  planetaryMotion,
  textVariations,
  slideingIn,
  fadeIn,
} from "../../utils/Animations";
import { motion } from "framer-motion";
import {MetaExploreraBoy1} from "./../../assets"
import styles from "../../styles";
import { TypingText,EventBox } from '../../Components';
import { Eventlists } from '../../TemporaryData';

const Events = () => {
  return (
    <section className={`${styles.padding} relative z-10`}>
    <motion.div
    variants={staggeringOfContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:'false',amount:0.25}}
    className={`${styles.innerWd} mx-auto flex flex-col justify-center items-center gap-8`}>

      

<TypingText title="Whats happening?" TextStyle="font-bold lg:text-[48px] text-[34px]" />



      

       

       {Eventlists.map((event,index)=>(<EventBox {...event} index={index}/>))

       }
      



    </motion.div>
    </section>
  )
}

export default Events