import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { Home } from './Home'
const Layout = () => {
  return (
   <>
   
   <Navbar/>

   <Outlet/>
   </>
  )
}

export default Layout