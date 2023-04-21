import React from 'react'
import { Hypnosis } from 'react-cssfx-loading'

const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center absolute top-0 bg-white'>
    <Hypnosis color='rgb(59 130 246)'/>
    </div>
  )
}

export default Loading
