//Features.js

import React, { useState } from 'react';
import './Features.css';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './PaymentModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import {useAuth} from './Context';
import Swal from 'sweetalert2';



const Features = () => {
  const { isLoggedIn } = useAuth();

    const navigate = useNavigate();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const openPaymentModal = () => {
      if (!isLoggedIn) { // Replace this with the actual check for user authentication status
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to be logged in to purchase premium features.',
          footer: '<a href="/login">Click here to log in</a>'
        });
      } else {
        // Logic to open the actual payment modal
        setIsPaymentModalOpen(true);
      }
        
      };
    
      const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
      };

    const handleRegisterClick = () => {
        navigate('/register');
      }
    return (

<div className="features-container">
      <div className="image-div left-image">
    {/* Image or content for the left side */}
    <img src="https://i.imgur.com/UYOizrU.png" alt="Left side NFT" />
    <img src="https://i.imgur.com/c6udVDR.png" alt="Left side NFT" />
    <img src="https://i.imgur.com/qivQ5PK.png" alt="Left side NFT" />
  </div>


        <div className="features">
            <h1>Manage Your NFT Project & Users Information Securely and Easily</h1>
            <p>Our platform is designed for NFT collection owners to collect, manage, and engage with their community through email list.</p>
            <ul>
                <li><FontAwesomeIcon icon={faEnvelope} /> Collect verified emails from NFT holders</li>
                <li><FontAwesomeIcon icon={faPaperPlane} /> Send targeted email campaigns</li>
                <li><FontAwesomeIcon icon={faBoxes} /> Manage multiple NFT collections</li>
                <li><FontAwesomeIcon icon={faPlug} /> Integrate with popular NFT marketplaces</li>
            </ul>
            <button onClick={handleRegisterClick} className='feature-button'>GET STARTED</button><br></br><br></br>
            <button onClick={openPaymentModal} className="feature-button purchase">
            PURCHASE PREMIUM
          </button>
          <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} />

        </div>

        <div className="image-div right-image">
    {/* Image or content for the right side */}
    <img src="https://i.imgur.com/YHnbYOa.png" alt="Right side NFT" />
    <img src="https://i.imgur.com/muEk18C.png" alt="Left side NFT" />
    <img src="https://i.imgur.com/H5gNtKt.jpg" alt="Left side NFT" />
  </div>
        </div>


    )
}

export default Features;