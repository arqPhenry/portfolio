import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Background } from '../pages/Background'
import { Homeeng } from '../pages/Homeeng'
import { Home } from '../pages/Home'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/en' element={<Homeeng />} />
            </Routes>
            <Background />
        </BrowserRouter>
  )
}

export { Router }
