import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Sends from './pages/Sends/Sends'
import Walls from './pages/Walls/Walls'
import ClimbingRoutes from './pages/Routes/Routes'
import Nav from './components/NavBar/NavBar'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <div className='app bg-dark'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sends' element={<Sends/>}/>
        <Route path='/walls' element={<Walls/>}/>
        <Route path='/routes' element={<ClimbingRoutes/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
    
  )
}

export default App
