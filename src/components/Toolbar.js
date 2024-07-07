// Toolbar.js
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Toolbar.css';
import { useAuth } from './Context';

const Toolbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="toolbar">
      <div className="toolbar-logo">
        <Link to="/">
        {/* <h1>NFT Collector</h1> */}
        <img height="60px" width="60px" src="https://i.imgur.com/mES41CO.png"></img>
        </Link>
      </div>
      <div className="toolbar-navigation">
        {!isLoggedIn ? (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register"><button>Sign Up</button></Link>
          </>
        ):(
          <>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/dashboard">Dashboard</Link>
          </>
          
        )}
        {/* <Link to="/features">Features</Link> */}
        <Link  hidden to="/pricing">Pricing</Link>
        <Link hidden to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Toolbar;
