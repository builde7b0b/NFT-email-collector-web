// Toolbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-logo">
        <h1>NFT Collector</h1>
      </div>
      <div className="toolbar-navigation">
      <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/features">Features</Link> */}
        <Link to="/pricing">Pricing</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Toolbar;
