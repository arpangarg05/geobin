import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer} from './components'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
  <div className='min-h-screen flex flex-col bg-gray-100'>
    <div className='w-full flex flex-col content-between bg-gray-100'>
        <Header />
        <main>
        <Outlet />
        </main>
    </div>
    <Footer />
  </div>
  ) : <div className='min-h-screen flex flex-col bg-gray-100' />
}

export default App
