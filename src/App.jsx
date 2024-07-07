/*

import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <h1><center><b>Golden Future Supportive Trust</b></center></h1>
  
      <div >
        <Navbar />
        <SideBar />
      </div>
    </>
  )
}

export default App

*/


import React from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    // <Router>
      <div className="app-container">
        <marquee className="marquee">
          <h1 className="title">Golden Future Supportive Trust</h1>
        </marquee>
        <div className="main-content">
          <Navbar />
          <SideBar />
        </div>
      </div>
    // </Router>
  );
}

export default App;
