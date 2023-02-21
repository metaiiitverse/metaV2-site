import React,{useState} from 'react'
import {ExploreScope} from "../../TemporaryData"
import {
  staggeringOfContainer,
  textVariations,
  slideingIn,
  fadeIn,
} from "../../utils/Animations";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { TypingText,TitleText,ScopeCards } from '../../Components';


const Grid = () => {
   const [active,setActive]=useState("scope-02")


  return (
    <section className={`${styles.paddings}  w-full`}>
    <motion.div
    variants={staggeringOfContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`${styles.innerWd} flex flex-col text-center  w-full   `}
    >
      
    <TypingText title="Scope For MetaVerse" TextStyle="text-center font-light  text-[26px]"/>
    <TitleText title= {<>Plethora of Oppurtunities</>} textStyles="text-center font-semibold" />
    <div className='mt-[40px] flex md:flex-row flex-col min-h-[65vh] gap-5 justify-center items-center'>
      {ExploreScope.map((scope,index)=>(
        <ScopeCards key={scope.id}
          {...scope}
          index={index}
          active={active}
          handleClick={()=>setActive(scope.id)}
        />

      ))}


    </div>






    </motion.div>
     

    </section>
  )
}

export default Grid