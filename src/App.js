import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>NFT Collection Email Collector</h1>
        <p>Welcome to the NFT Collection Email Collector App!</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://via.placeholder.com/300" alt="App Preview" style={{ borderRadius: '8px', marginBottom: '20px' }} />
          <p style={{ maxWidth: '400px', textAlign: 'center' }}>This application allows NFT collection owners to collect and manage email addresses from verified NFT holders. Sign up, log in, and start managing your collection's community today!</p>
        </div>


        <div style={{ marginTop: '20px' }}>
        <Link className="App-link" to="/login" style={{ marginRight: '20px' }}>Login</Link>
            <Link className="App-link" to="/register" style={{ marginRight: '20px' }}>Register</Link>
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
