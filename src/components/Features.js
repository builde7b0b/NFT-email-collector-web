//Features.js

import React, { useState } from 'react';
import './Features.css';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';

const Features = () => {
    const navigate = useNavigate();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const openPaymentModal = () => {
        setIsPaymentModalOpen(true);
      };
    
      const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
      };

    const handleRegisterClick = () => {
        navigate('/register');
      }
    return (
        <div className="features">
            <h1>Features</h1>
            <p>Our platform is designed for NFT collection owners to collect, manage, and engate with their community through email list.</p>
            <ul>
                <li><i className="feature-icon fas fa-envelope"></i> Collect verified emails from NFT holders</li>
                <li><i className="feature-icon fas fa-paper-plane"></i> Send targeted email campaigns</li>
                <li><i className="feature-icon fas fa-boxes"></i> Manage multiple NFT collections</li>
                <li><i className="feature-icon fas fa-plug"></i> Integrate with popular NFT marketplaces</li>
            </ul>
            <button onClick={handleRegisterClick} className='feature-button'>GET STARTED</button><br></br><br></br>
            <button onClick={openPaymentModal} className="feature-button purchase">
            Purchase PREMIUM
          </button>
          <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} />

        </div>


    )
}

export default Features;