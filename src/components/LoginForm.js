import React, {useState, useEffect} from 'react';
import './LoginForm.css';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom'


function LoginForm() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

const loginUserF = async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const userData = {email, password};

    try { 
      const response = await loginUser(userData);
      if(response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Login Failed", error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      alert('You have successfully logged in, redirecting to Dashboard');
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

    return (
        <div className="login-form-container">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={loginUserF}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
}

export default LoginForm;