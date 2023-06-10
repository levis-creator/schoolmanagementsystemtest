import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNavBar from './components/BottomNavBar'

const AdminLayout = () => {
  return (
    <div>
      <Outlet/>
      <BottomNavBar/>
    </div>
  )
}

export default AdminLayout