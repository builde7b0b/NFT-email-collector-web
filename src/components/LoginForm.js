import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;