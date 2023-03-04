import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Cuisine from './components/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/meal/:type' element={ <Cuisine /> } />
        <Route path='/searched/:search' element={ <Searched /> } />
        <Route path='/recipe/:id' element={ <Recipe /> } />
    </Routes>
    </>
  )
}

export default App