import React from 'react'
import img from '../../src/Pages/assets/manvr.jpg'
import '../../src/Pages/Events/style.css'

export default function EventList() {
  return (
    <>
            <div className="box flex border m-2">
                <div className="img w-64 mt-3 ml-4">
                    <img className=' rounded-3xl' src={img} alt="" />
                </div>
                <div className="content text-white ml-2 pl-10">
                    <h2>Event 1</h2>
                    <p className='text-sm opacity-50'>12.02.2023</p>
                    <p className=' text-xs'>This is the first blockchian bootcamp conducted in iiit bbsr underthe guidance of ibm and our kearned member.This was very excieting and fun event and students enjoyed a lot and were also given free refreshment</p>
                </div>
            </div>           
    </>
  )
}
