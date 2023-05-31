import React, { useEffect, useState } from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import  { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { client } from '../client';


const Footer = () => {
   
  return (
   <footer className='bg-blue-950 text-white'>
   <div className='p-3 flex flex-col gap-5 md:px-16 lg:px-32'>
   {/* Contact information */}
   <div className='flex flex-col gap-3 py-10'>
    <h1 className='text-2xl font-bold'> Connect with us</h1>
    <div className="flex items-center gap-2 text-xl">
    <div className="text-2xl">
        <MdEmail/>
    </div>
        sampleemail@gmail.com
    </div>
    <div className="flex items-center gap-2 text-xl">
    <div className="text-2xl">

        <MdPhone/>
    </div>
        +2496878756
    </div>
    <div className="flex items-center gap-2 text-xl">
    <div className="text-2xl">
        <MdLocationPin/>
    </div>
       Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. 
    </div>
   </div>
    {/* Social media links */}
    <div className="flex justify-between text-blue-950 mb-6">
    <div className='text-2xl bg-white p-2 rounded-full'>
        <FaFacebookF/>
    </div>
    <div className='text-2xl bg-white p-2 rounded-full'>
        <FaTwitter/>
        </div>
        <div className='text-2xl bg-white p-2 rounded-full'>
        <FaInstagram/>
        </div>

        <div className='text-2xl bg-white p-2 rounded-full'>
        <FaLinkedinIn/>
        </div>
    </div>
    {/* Quicklinks */}
    <div  >
        <h1 className='font-bold text-lg'>Company</h1>
        <ul className='space-y-3 py-4'>
            <li>
            <Link to="/about">
                About us
            </Link>
            </li>
            <li>
            <Link to="/career">
                Careers
            </Link>
            </li>
            <li>
            <Link to="/contact">
                Contact us
                </Link>
            </li>
        </ul>
    </div>
    <div className="flex">
       <p> Copyright 2023.School name .All rights reserved.</p> 
    </div>
   </div>
   </footer>
  )
}

export default Footer
