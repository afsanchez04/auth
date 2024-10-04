import React from 'react'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { RoutesIndex } from './routes/RoutesIndex'
import { AuthProvider } from './context/AuthContext'

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </AuthProvider>
  )
}
