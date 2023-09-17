import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <Router>
      <Toolbar />
    <div className="App">
      <header className="App-header">
        <h1>Welcome to NFT CollecTOR</h1>
        <p>The World's Most Powerful NFT Collection Management Tool</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400" alt="App Preview" style={{ borderRadius: '8px', marginBottom: '20px' }} />
          <p style={{ maxWidth: '400px', textAlign: 'center' }}>This application allows NFT collection owners to collect and manage email addresses from verified NFT holders.<br></br> Sign up, log in, and start managing your collection's community today!</p>
        </div>


        <div style={{ marginTop: '20px' }}>
        <Link className="App-link" to="/login" style={{ marginRight: '20px' }}>Login</Link>
            <Link className="App-link" to="/register" style={{ marginRight: '20px' }}>Sign Up</Link>
            <Link className="App-link" to="/dashboard">Dashboard</Link>
        </div>
      </header>

      <main>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </main>
    </div>
    </Router>
  );
}

export default App;
