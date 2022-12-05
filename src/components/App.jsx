import React from 'react'
import '@styles/global.scss'
import { Router } from '../routes/Router.jsx'
import { LangProvider } from '../context/langContext'
import { useInitialState } from '../hooks/useInitialState.js'
import { AppContext } from '../context/AppContext.js'

const App = () => {
  const initialState = useInitialState()
  return (
    <LangProvider>
      <AppContext.Provider value={initialState}>
        <Router />
      </AppContext.Provider>
    </LangProvider>
  )
}

export { App }
