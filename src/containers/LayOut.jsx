import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Background } from '../components/Background'

export const LayOut = () => {
  return (
        <>
            <NavBar />
            <Background />
            <Outlet />
        </>
  )
}
