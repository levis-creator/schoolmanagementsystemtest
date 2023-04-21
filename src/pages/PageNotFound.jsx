import React from 'react'
import img from "../assets/404.jpg"
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  const navigate=useNavigate()
  return (
    <div className='absolute top-0 h-full w-screen bg-white'>
    <div className="flex flex-col justify-center items-center gap-2 h-full">
    <img src={img} alt='image 404' className='m-0 h-96 w-96' />
    <h1 className='font-extrabold text-lg'>
      PAGE NOT FOUND
    </h1>
    <button onClick={()=>navigate(-1)} className='flex items-center gap-2 bg-blue-600 text-white rounded-full w-fit px-5 py-2 text-center'>
    <IoMdArrowBack/>
     Go Back
    </button>
    </div>

    </div>
  )
}

export default PageNotFound
