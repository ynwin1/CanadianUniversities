import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import Posts from './pages/Posts'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Posts/:university/:category" element={<Posts />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)