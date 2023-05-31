import React from 'react'

const PageTop = ({bg,label, description }) => {
  return (
    <>
    <div className='w-full relative '>
      <img src={bg} alt={description} 
      className='w-full h-[200px] object-cover'/>
      <div style={{
        backgroundColor:'rgba(0, 0, 0, 0.4)'
      }} className="absolute top-0  w-screen h-full flex items-center justify-center">
      <div className='bg-red-700 text-white px-5 py-1 rounded-2xl shadow-md text-lg font-bold uppercase'>
      {label}</div>
      </div>
    </div>
    </>
  )
}

export default PageTop
