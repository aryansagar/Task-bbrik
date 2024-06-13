import React from 'react'
import BoardTracker from "../../pages/BoardTracker/Index.js"
import DashBoard from '../../pages/DashBoard/Index.js'
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
        <Route path="/baord" element={<BoardTracker />} />
        <Route path="/" element={<DashBoard/>} />
    </Routes>
  
  )
}

export default AppRoutes;