import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Modal from 'react-modal';

// testing - LOCAL
const stripePromise = loadStripe('pk_test_51LXunxDehgflY7M5CwBLdS3Gx93qehw73hHxtJFpSBxp7T4KwewVgl7cOHsZ9BiyhMitAYl6fMvjmdaOvuNABea3005XjBvgId');
Modal.setAppElement('#root'); // Replace '#root' with the appropriate element where your React app is mounted.


// production code 
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// Modal.setAppElement('#root');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
