import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import logo from '../../Components/1x/Asset.png'
import '../Contact/style.css'
import Axios from "axios";

export default function Contact() {
   const[form,setForm]= useState({ 
   name:"",
   email:""

   })
     

   const handelClick=(e)=>{
    setForm({

      ...form,
      [e.target.name]:e.target.value
    
    })

    
   }



   const handelSubmit=async(e)=>{

    e.preventDefault()

    try {


     await Axios.post("http://localhost:8000/createUser",{name:form.name,email:form.email}).then((response)=>console.log(response))
      // reset form after submission of data
      setForm({
        name:"",
        email:""
      })
    
    alert("submission successfully 😊😊😊  !! Welcome to Metaverse!")
    console.log("SUCCESSFUL")

      
    } catch (error) {
      alert("Whoops 🥺🥺🥺! Something went wrong with your request...Please try again later")
      
    }
   


   }




  return (
    <div className='contact-section'>
      <Navbar/>
      <div className=' contact-div flex justify-around items-center p-5 mt-5 text-white'>
        <div className="left p-16">
          <h1>Want to explore <span id='green-text'>limitless</span> possibilities?</h1>
          <p className='text-xs '>Enter the metaverse and connect with like-minded individuals who share your passions. Join us now!" - Join us to connect with a global community of like-minded individuals who share your interests and passions in the metaverse.</p>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <div className="logo w-32">
            <img src={logo} alt="" />
          </div>
          <div className="form flex flex-col">
            <input type="text" placeholder='Your Name' name="name" className='form-text text-slate-600 p-2 w-72 rounded-lg m-3' onChange={(e)=>handelClick(e)}  value={form.name} />
            <input type="email" placeholder='Your Email' name="email" className='p-2 w-72 text-slate-600 rounded-lg m-3'  onChange={(e)=>handelClick(e)} value={form.email}/>
            <button className=' btn p-2 m-3 w-72 text-white' onClick={(e)=>handelSubmit(e)}>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}
