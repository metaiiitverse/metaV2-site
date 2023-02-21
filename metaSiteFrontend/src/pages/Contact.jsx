import React, { useState } from 'react'

import { ContactForm,Texts } from '../sections/Contact'
 

const Contact = () => {
const[form,setform]=useState({
name:"",
college:"",
email:"",
contactNumber:"",
}) 


  return (
    <div className='text-white relative '>
    <div className=''>
    <Texts/>

     
    <div className='gradient-03 z-0'/>
     
   


    <ContactForm/>

   </div>
    </div>
  )
}

export default Contact