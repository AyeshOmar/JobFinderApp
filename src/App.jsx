import { useState } from 'react'
import './App.css'
import Home from './User/Pages/home/Home'
import AllJobGrid from './User/Pages/AllJobPage/AllJobGrid'
import { Routes, Route } from "react-router-dom";
import JobDetails from './User/Pages/JobDetails/JobDetails';
import Header from './User/Components/header/Header';
import Footer from './User/Components/Footer/Footer';
function App() {
  

  return (
  
     <div>
     <Header/>
      <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/all-jobs" element={<AllJobGrid />} />  
            <Route  path="/Job-Details"  element={<JobDetails/>}/>    
      </Routes>
      <Footer/>
      </div>
  )
}

export default App
