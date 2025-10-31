import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
