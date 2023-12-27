import React from 'react';
import './App.css';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
