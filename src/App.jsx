import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Shop from './Components/Shop.jsx'
import Footer from './Components/Footer.jsx'
import Cart from './Pages/Cart.jsx'

let heroList =[
  {text1: 'GET STARTED ON',   text2: 'YOUR COZY SHOPPING'},
  {text1: 'OFFSET ON', text2: 'YOUR BEST SHOPPING'},
]


const App = () => {
  const[heroText, setHeroText] = useState(1);
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <Home heroList={heroList[heroText]} heroText={heroText} setHeroText={setHeroText} />
          <Shop/>
         </>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App