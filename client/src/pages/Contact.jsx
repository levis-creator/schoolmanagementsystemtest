import React from 'react'
import Footer from '../components/Footer'
import bg from "../assets/firmbee-com-SpVHcbuKi6E-unsplash.jpg"
import  { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';
import PageTop from '../components/PageTop';

const Contact = () => {
  return (
    <div>
    <div className="w-screen min-h-screen">
    <PageTop bg={bg} label="contact"/>
    <div className="p-3">
      <div className="flex flex-col 
      justify-center w-full
        items-center text-center space-y-7 pt-10">
        {/* email items */}
        <div className="flex flex-col items-center s">
        <div className="text-4xl text-gray-700">
        <MdEmail/>
        </div>
        <div className="text-xl">
        sampleemail@gmail.com
        </div>
        </div>
        {/* phone */}
        <div className="flex flex-col items-center">
        <div className="text-4xl text-gray-700">
        <MdPhone/>
        </div>
        <div className="text-xl">
        +24968787565
        </div>
        </div>
        {/* location */}
        <div className="flex flex-col items-center">
        <div className="text-4xl text-gray-700">
        <MdLocationPin/>
        </div>
        <div className="text-xl">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. 
         </div>
        </div>
      </div>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Contact
