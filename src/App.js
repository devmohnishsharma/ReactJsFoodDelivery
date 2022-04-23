import React from 'react'
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompleteMenu from './Pages/CompleteMenu';


const App = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullmenu" element={<CompleteMenu />} />
      </Routes>
      <div> Foooter </div>
    </Router>
    </div>
  )
}

export default App
