import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDashboard from '../../components/NavbarDashboard'

const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard/>
      <Outlet/>
      </div>
  )
}

export default Dashboard