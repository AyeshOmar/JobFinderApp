import { useState } from 'react'
import './App.css'
import Home from './User/Pages/home/Home'
import AllJobGrid from './User/Pages/AllJobPage/AllJobGrid'
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
  
     <div>

      <Routes>
            <Route exact  path="/" element={<Home />} />
            <Route  path="/all-jobs" element={<AllJobGrid />} />      
      </Routes>
      </div>
  )
}

export default App
