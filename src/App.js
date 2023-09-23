import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Toolbar from './components/Toolbar';
import nftImage from './images/nftscollection.jpeg';
import openSea from './images/opensea.jpeg';
import blur from './images/blur.png';
import Features from './components/Features';
import ViewEmails from './components/ViewEmails';
import ManageCollections from './components/ManageCollections';
import Pricing from './components/Pricing';
import PaymentForm from './components/PaymentForm';
import { AuthProvider } from './components/Context';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Toolbar />
      <Features />
      {/* <PaymentForm /> */}
    <div className="App">
      <main>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/view-emails" element={<ViewEmails />} />
            <Route path="/manage-collections" element={<ManageCollections />} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>

      </main>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
