import React from 'react'
import '@styles/global.scss'
import { Router } from '../routes/Router.jsx'
import { LangProvider } from '../context/langContext'

const App = () => {
  return (
    <LangProvider>
      <Router />
    </LangProvider>
  )
}

export { App }
