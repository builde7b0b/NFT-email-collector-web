import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentForm = ({onPaymentSuccess}) => {
  const [isLoading, setIsLoading] = useState(true);
    const [paymentFeedback, setPaymentFeedback] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', //replacw with Flask API URL 

});

useEffect(() => {
  console.log(isLoading)
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

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
          setPaymentFeedback('Payment successful!');
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle and display a generic error to the user
      }
  };

  return (
    <div className="payment-form-container">
        {isLoading ? (
            <div className="loading-spinner">Loading...</div>
        ) : (
            <>
            <div className="product-details">
                <div>
                    <div className="title">Premium Subscription</div>
                    <div className="description">Get unlimited access to all our features!</div>
                </div>
                <div className="price">$19.99/month</div>
            </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Card details:
                        <CardElement />
                    </label>
                    <button type="submit" disabled={!stripe}>
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
