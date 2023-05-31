import React, { useEffect, useState } from 'react'
import bg from "../assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg"
import Footer from '../components/Footer';
import PageTop from '../components/PageTop';
import { client } from '../client';
import { PortableText } from '@portabletext/react';
import Loading from '../components/Loading';
const About = () => {
  const [aboutData, setAboutData]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const aboutItem =async() =>{
    const dataItemAbout = await client.fetch(`*[_type=="about"]{
      aboutImage {
        asset -> {
          _id, 
        url}
      },
      body,
    }`).then((data)=>setAboutData(data))
    setIsLoading(false)
    return dataItemAbout
  }
  useEffect(()=>{

    aboutItem()
  },[])
  return (
    <>
    {isLoading?<Loading/>: <div className='bg-white'>
    <PageTop bg={aboutData[0].aboutImage.asset.url} label="background"/>
    <div className='p-5 md:px-16 lg:px-40 text-justify space-y-10'>
    <PortableText value={aboutData[0].body} />
    </div>
    <Footer/>
    </div>}
    </>
  )
}

export default About
