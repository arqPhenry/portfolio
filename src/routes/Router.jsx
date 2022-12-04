import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Background } from '../components/Background'
import { Home } from '../pages/Home'
import { LayOut } from '../containers/LayOut'

const Router = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<LayOut />}>
                <Route index element={<Home />} />
              </Route>
              <Route path='*' element={<h1>404</h1>} />
          </Routes>
          <Background />
      </BrowserRouter>
  )
}

export { Router }
