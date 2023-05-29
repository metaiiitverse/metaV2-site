import React ,{useState}from 'react'
import { TypingText } from "../../Components";
import { motion } from "framer-motion";
import { staggeringOfContainer, fadeIn } from "../../utils/Animations";


const ContactForm = () => {

  const [form, setform] = useState({
    name: "",

    email: "",
    
  });

  const handelchange=(e)=>{
     setform( {... 
      [e.target.name]=e.target.value
    })
  }

const handelSubmit=()=>{
  console.log(form)
}


  return (
    <div className="text-white relative bg-black">
    <section className="text-gray-400 bg-gray-900 body-font h-[100vh]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <motion.div
          variants={staggeringOfContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.25 }}
          className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"
        >
          <TypingText
            title="Want to explore limitless possibilities? "
            TextStyle="text-white text-[50px] text-center md:text-left font-semibold"
          />



          <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[12px] font-light  text-[15px] text-center md:text-left text-white"
        >
          "Enter the metaverse and connect with like-minded individuals who
          share your passions. Join us now!" - Join us to connect with a
          global community of like-minded individuals who share your interests
          and passions in the metaverse.
        </motion.p>
        </motion.div>

        

        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              for="full-name"
              className="leading-7 text-sm text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              value={form.name}
              onChange={(e)=>handelchange(e)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e)=>handelchange(e)}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{handelSubmit()}}>
            Button
          </button>
          <p className="text-xs mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  </div>


   


  
  )
}

export default ContactForm