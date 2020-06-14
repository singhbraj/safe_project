import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sign from './component/SignUp';
import Home from './component/home'
import TimeEntry from './component/Login'
// import Tentry from './component/Tentry'
 import Time from './component/Time'
// import Watch from './component/stopWatch'

function App() {
  return (
   // <Time />
    <Router>
    <div className="container"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <Link to="/" className="navbar-brand">Home</Link>
     <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/signup" className="nav-link">SignUp</Link>
      </li>
      <li className="nav-item">
        <Link to="/timeEntry" className="nav-link">TimeEntry</Link>
      </li>
      </ul>
      </div>
  
    </nav>
    <Route path="/" exact component = {Home} />
    <Route path="/signup" exact component = {Sign} />  
    <Route path="/timeEntry" exact component = {TimeEntry} />
    </div>
    </Router>

  );
}

export default App;
