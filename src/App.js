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
import { AuthProvider, useAuth } from './components/Context';



function ProtectedRoutes(){
  const {isLoggedIn} = useAuth();

  return (
    
    <Routes>
      {/* Common routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/pricing" element={<Pricing />} />
      {/* ... other common Routes */}
      
      {/* Protected routes */}
      {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      {isLoggedIn === false && <Route path="/features" element={<Features />}/>}
      <Route path="/view-emails" element={<ViewEmails />} />
            <Route path="/msanage-collections" element={<ManageCollections />} />
      {/* ... other protected Routes based on isLoggedIn */}
    </Routes>
    
  );
  
}

function App() {

  return (
    <AuthProvider>
      

    <Router>
      <Toolbar />
      <Features/>
      
      {/* <video className="intro-video" autoPlay muted loop>
  <source src="https://player.vimeo.com/external/411458540.sd.mp4?s=9bc22aa74d4d7ee9b7ce93473a8b42f597b0daf5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
</video> */}
      
      
      {/* <PaymentForm /> */}
    <div className="App">
      <main>
      <ProtectedRoutes />
      </main>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
