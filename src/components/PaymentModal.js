import React, { useState } from 'react';
import Modal from 'react-modal';
import PaymentForm from './PaymentForm'; // Import your PaymentForm component

const PaymentModal = ({ isOpen, onClose }) => {

    const handlePaymentSuccess = () => {
        onClose();
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
