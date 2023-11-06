import React, { useState } from 'react';
import Modal from 'react-modal';
import PaymentForm from './PaymentForm'; // Import your PaymentForm component
import {useAuth} from './Context';

const PaymentModal = ({ isOpen, onClose }) => {
  const { isLoggedIn } = useAuth();

    const handlePaymentSuccess = () => {
        onClose();
    }

    if (!isLoggedIn) {
      return <p>Please log in to Purchase Premium Services</p>
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Payment Modal"
      onPaymentSuccess={handlePaymentSuccess}
    >
      <button onClick={onClose}>Close</button>
      <PaymentForm onPaymentSuccess={handlePaymentSuccess}/>
    </Modal>
  );
};

export default PaymentModal;
