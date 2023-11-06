// Toolbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-logo">
        <Link to="/">
        {/* <h1>NFT Collector</h1> */}
        <img height="60px" width="60px" src="https://i.imgur.com/mES41CO.png"></img>
        </Link>
      </div>
      <div className="toolbar-navigation">
      <Link to="/register"><button>Sign Up</button></Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/features">Features</Link> */}
        <Link  hidden to="/pricing">Pricing</Link>
        <Link hidden to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Toolbar;
