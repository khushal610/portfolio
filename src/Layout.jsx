import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
        <Header />
        <div className='pt-20'>
        <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout
