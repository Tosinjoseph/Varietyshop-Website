import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Shop from './Components/Shop.jsx'

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
        
      </Routes>
    </Router>
  )
}

export default App