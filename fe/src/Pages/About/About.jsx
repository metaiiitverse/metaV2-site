import React from 'react'
import Navbar from '../../Components/Navbar'
import animation from '../assets/bitcoin.json'
import './style.css'
import Lottie from 'lottie-react'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="about flex text-white justify-around items-center">
        <h1><span id='green-text'>About</span> us</h1>
        <div className="line"></div>
      </div>
      <div className="main-section flex justify-around items-center text-white pl-5 pr-5 ml-2 mr-2">
        <div className="about-left">
          <h2><span id='green-text'>Blockchain</span> defined</h2>
          <p className='mt-5'>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved. </p>
        </div>
        <div className="about-center">
          <Lottie animationData={animation} style={{height:"auto",width:500}} />
        </div>
        <div className="about-right">
          <p><span id='green-text'>Why blockchain is important</span>: Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more.</p>
        </div>
      </div>
      
    </div>
  )
}
