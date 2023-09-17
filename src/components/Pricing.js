// Pricing.js
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <p>We offer a 30-day free trial, after which you can choose from the following plans:</p>
      <ul>
        <li>Basic Tier: $50/month</li>
        <li>Advanced Tier: $100/month</li>
      </ul>
    </div>
  );
};

export default Pricing;
