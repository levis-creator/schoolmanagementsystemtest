import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const NewsCard = ({newsImage, 
  newsDescription, 
  newsTitle,
  slug
}) => {
  return (
    <>
    <Link to={`/news/${slug}`} className='w-full'> 
    <div className="flex flex-col shadow-md rounded-lg w-full  ">
    <img
    
    src={newsImage} alt="news " className="h-[230px] object-cover "/>
    <div className="bg-red-800 text-white px-3 py-5 leading-relaxed">
    <h1 className="font-bold text-lg ">{newsTitle}</h1>
    <p>{newsDescription}</p>
      Read Article
    </div>
  </div>
    </Link>
    </>
      
    
  )
}

export default NewsCard
