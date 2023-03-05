import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLoaderData, useLocation } from 'react-router-dom'
import "./App.css"
import Cuisine from './components/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'

const App = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={ <Home /> } />
          <Route path='/meal/:type' element={ <Cuisine /> } />
          <Route path='/searched/:search' element={ <Searched /> } />
          <Route path='/recipe/:id' element={ <Recipe /> } />
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App