import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FeatureList from './FeatureList';
import { updateSubscriptionStatus } from '../services/api';



const PaymentForm = ({onPaymentSuccess}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [paymentFeedback, setPaymentFeedback] = useState('');
 
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

  });

  //PROD CODE
  // const api = axios.create({
  //   baseURL: 'https://nft-email-collector-api-806363e3ce7d.herokuapp.com/', //replacw with Flask API URL 

  // });

useEffect(() => {
  console.log(isLoading)
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

const handlePaymentSuccess = async () => {
  try {
    await updateSubscriptionStatus();
    console.log('Premium status updated successfully');
    setPaymentFeedback('Payment successful and premium status updated!');
    
    navigate('/dashboard');
  } catch (error) {
    console.error('Error updating premium status:', error);
    setPaymentFeedback('Payment successful but failed to update premium status.');
  }
};

  const handleSubmit = async (event, onPaymentSuccess) => {
    event.preventDefault();

    // setIsLoading(false);

    //     if (!stripe || !elements) {
    //         setIsLoading(false);
    //         return;
    //     }

    try {
        // Create a payment intent (server-side) and get a client secret
        const { data } = await api.post('/api/create-payment-intent', {
          amount: 1000, // Replace with your desired amount in cents
        });
    
        // Confirm the payment with the client secret and card details
        const { paymentIntent, error } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
    
        if (error) {
          console.error(error);
          // Handle and display payment error to the user
          setIsLoading(false);
            setPaymentFeedback(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log("Payment succeeded, redirecting...")
          // Payment succeeded, redirect to the Dashboard
          await handlePaymentSuccess();
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle and display a generic error to the user
      }
  };

  return (
    <div className="payment-form-container">
        {isLoading ? (
            <div className="loading-spinner"></div>
        ) : (
            <>
            <div className="product-details">
                <div>
                    
                    <FeatureList></FeatureList>
                </div>
                <div className="price">$19.99/month</div>
            </div>

                <form onSubmit={handleSubmit} className="payment-form">
    <div className="form-group">
        <label htmlFor="card-element" className="form-label">
            Enter Card Details
        </label>
        <div id="card-element" className="card-element">
            <CardElement />
        </div>
    </div>
    <button type="submit" disabled={!stripe} className="submit-button">
        Purchase
    </button>
</form>

                {paymentFeedback && <div className="feedback">{paymentFeedback}</div>}
            </>
        )}
    </div>
);
};

export default PaymentForm;
