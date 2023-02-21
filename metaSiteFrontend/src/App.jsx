import { useState } from 'react'
import {Home,Contact} from "./pages"
import { Route,Routes } from 'react-router-dom'
import { Navbar } from './Components'
import './App.css'

function App() {
  

  return (
    <div className="App bg-black overflow-hidden w-screen ">
    
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
        
    </div>
  )
}

export default App
