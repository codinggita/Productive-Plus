// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Home from './Components/home.jsx'
// import './index.css'
// import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <div className='bg-black'>
// {/* 
//   <Routes>
//     <Route path='/' element={<App/>}/>
//     <Route path='/home' element={<Home/>} />
//   </Routes> */}
//   <Route path="/" element={<App/>}>
//   <Route path="home" element={<Home/>} />
//   </Route>

//   <App></App>
//   </div>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Components/home.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-black'>
      <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
