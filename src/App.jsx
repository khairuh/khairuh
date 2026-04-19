import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './compoents/Login'
import Signup from './compoents/Signup'
import NavBar from './compoents/NavBar'
import { Routes, Route } from 'react-router-dom'
import StateBasics from './compoents/StateBasics'
import Name from './compoents/name'
import Api from './compoents/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/state' element={<StateBasics/>}/>
      <Route  path='/Name' element={<Name/>}/>
      
      <Route  path='/Api' element={<Api/>}/>
      


    </Routes>
      
      
    </>
  )
}

export default App
