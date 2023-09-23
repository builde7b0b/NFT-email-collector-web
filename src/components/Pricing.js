// Pricing.js
import React, {useRef, useEffect} from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';


const Pricing = () => {
  const navigate = useNavigate();

  const pricesRef = useRef(null);

  useEffect(() => {
    pricesRef.current.focus();
  }, []);

  const handleRegisterClick = () => {
    navigate('/register');
  }
  return (
    <div className="pricing" >
      <h1>Pricing</h1>
      <p>We offer a 7-day free trial, after which you can choose from the following plans:</p>
      <div className="pricing-cards" >
        <div className="pricing-card">
          <h2>Basic Tier</h2>
          <p>$5/month</p>
          <button ref={pricesRef} className='pricing-button' onClick={handleRegisterClick}>Try FREE</button>
        </div>
        <div className="pricing-card">
          <h2>Advanced Tier</h2>
          <p>$50/month</p>
          <button className='pricing-button'>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
