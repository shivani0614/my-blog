import React from 'react';
// import './App.css';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import PageRenderer from './page-renderer.js';
import Home from './pages/home.js';


function App() {
  console.log('pagerender',PageRenderer)
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route  path="/:page" element={<PageRenderer/>} ></Route>
          <Route  path="/" element={<Home/>} ></Route>
          <Route element='{() => 404}' ></Route>
        </Routes>
      </div>

    </Router>
    
  );
}

export default App;
