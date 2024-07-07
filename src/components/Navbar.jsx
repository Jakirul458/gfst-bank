
/*

import React from 'react'

import { NavLink, BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Logout from '../pages/Logout'

function Navbar() {
  return (
    <>

      <div style={{ display: "flex",height:"10vh", justifyContent: "space-between", backgroundColor: "red" }}> <div></div>
        
        <div> <NavLink to='/home'>Home</NavLink></div>
        
        <div> <NavLink to='/about'>About</NavLink></div>
        
        <div>Total main balance</div>
        <div>Available main balance</div>
        <div>Loan approval balance</div>
        <div> Reamaining loan balance</div>
        <div>Investment balance</div>
        <div>Profit</div>
        <div> <NavLink to='/logout'>Log out</NavLink></div>
      </div>

      <div>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />


        </Routes>
      </div>

    </>
  )
}

export default Navbar

*/



import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logout from '../pages/Logout';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-section">
          <NavLink to='/home' className="nav-link">Home</NavLink>
          <NavLink to='/about' className="nav-link">About</NavLink>
          <div className="balance-info">Total main balance</div>
          <div className="balance-info">Available main balance</div>
          <div className="balance-info">Loan approval balance</div>
          <div className="balance-info">Remaining loan balance</div>
          <div className="balance-info">Investment balance</div>
          <div className="balance-info">Profit</div>
          <NavLink to='/logout' className="nav-link">Log out</NavLink>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default Navbar;

