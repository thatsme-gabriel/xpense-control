import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import CreateAccount from './pages/CreateAccount';
import Transactions from './pages/Transactions';
import AppLayout from './components/layout/AppLayout';

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route path='login' element={<Login />} />
        <Route path='signin' element={<CreateAccount />} />

        {/* Rotas privadas */}
        <Route element={<AppLayout/>}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/transactions' element={<Transactions />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
