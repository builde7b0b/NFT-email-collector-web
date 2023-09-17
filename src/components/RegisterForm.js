import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import './RegisterForm.css'; 
import { registerUser } from '../services/api';



function RegisterForm() {
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    const registerUserF = async (e) => {
        e.preventDefault();
        const email = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        const userData = { email, password };

        try {
            const response = await registerUser(userData);
            if (response.status === 200) {
                setIsRegistered(true);
                 // Notify the user 
            // alert('You have successfully registered! Redirecting to Login');

            // navigate('/login');
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
        registerUser(userData);
    }

    useEffect(() => {
        if (isRegistered) {
            // Notify the user 
            alert('You have successfully registered! Redirecting to Login');

            navigate('/login');
        }
    }, [isRegistered, navigate]);

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