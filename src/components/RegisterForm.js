import React from 'react';
import './RegisterForm.css'; 
import { registerUser } from '../services/api';


const registerUserF = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const userData = { email, password };
    registerUser(userData);
}
function RegisterForm() {
    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={registerUserF}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button  type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;