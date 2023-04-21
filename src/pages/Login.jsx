import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <div className='lg:px-[169px] px-7 
    '>
      <div className="flex justify-center items-center w-full py-20">
       <div className ="w-[100%] shadow-md">
       <Outlet/>
       <div className="flex w-full border-t-2 overflow-hidden">

        <NavLink to="/login/student" style={({isActive})=>(isActive?{backgroundColor:'#991B1B',color:'white' }:{backgroundColor:'white'})} className='w-full px-5 py-5 hover:bg-red-400 rounded-br-3xl '>
        Student
        </NavLink>
        <NavLink to="/login/staff" style={({isActive})=>(isActive?{backgroundColor:'#991B1B',color:'white' }:{backgroundColor:'white'})} className='w-full px-5 py-5 hover:bg-red-400 rounded-br-3xl'>
        Staff
        </NavLink>
    </div>
       </div>
      </div>
    </div>
  )
}

export default Login
