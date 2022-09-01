import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Sends from './pages/Sends/Sends'
import Nav from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app bg-dark'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sends' element={<Sends/>}/>
    </Routes>
    </div>
    
  )
}

export default App
