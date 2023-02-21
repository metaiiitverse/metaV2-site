import React ,{useState}from 'react'
import styles from '../styles'
import { navAnimations } from '../utils/Animations'
import { motion } from 'framer-motion'
import {navlinks} from "../TemporaryData"
import { useNavigate } from 'react-router-dom';





const Navlink=({name,link,handelClick,activeLink})=>(
  <div className='relative'>
{activeLink === name?(<div className="p-4 font-semibold text-[20px] text-purple-400 leading-[12px] "  onClick={handelClick}>{name}</div>):(<div className="p-4 font-light text-[20px] text-white leading-[12px] " onClick={handelClick} >{name}</div>)
} </div>)




const Navbar = () => {
  const[activeLink,setActiveLink]= useState("Home")
  const navigate =useNavigate()
  return (
  <motion.nav variants={navAnimations} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative text-white`}> 
    
      <div className='absolute w-[50%] inset-0 gradient-01' />

  <div  className={`${styles.innerWd} mx-auto p-6 flex justify-between gap-4`}>
      <img src="" alt="Metalogo" className='w-[30px] h-[30px] object-contain'/>


      <h4 className='text-extrabol text-white leading-4 text-[29px]'>HELLO META</h4>

      
      <div className="lg:flex lg:flex-row hidden justify-center item-center ">
     


      



      {navlinks.map((link)=>(<Navlink  {...link} key={link.name}
       activeLink={activeLink}
       handelClick= {()=>{
        setActiveLink(link.name)
        navigate(link.link)
       }}/>))}
       </div>
      
      
   </div>
    
  </motion.nav>
  )
}

export default Navbar