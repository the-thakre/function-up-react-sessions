import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from 'react-confetti'
import './styles.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //vishal@2829.in

    const showToastMessage = () => {
        toast.success("Success Notification !");
    };


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Email validation (simple check for the presence of '@')
        setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
        !emailRegex.test(value) && toast.error("Email is not valid !");
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        // Password validation (minimum length of 6 characters)
        setPasswordError(value.length >= 6 ? '' : 'Password must be at least 6 characters');
        value.length < 6 && toast.error("Password is not valid !");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        // setIsFromSubmitted(true)
        // Additional logic for form submission if needed
        console.log('Form submitted:', { email, password });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='react-form'>
                <div className='email-section section'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <span style={{ color: 'red' }}>{emailError}</span>
                </div>
                <div className='password-section section'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <span style={{ color: 'red' }}>{passwordError}</span>
                </div>
                <div className='submit-section section'>
                    <button type="submit" disabled={emailError.length > 0 || passwordError.length > 0}>
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer />

            {isFormSubmitted && <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />}
        </>
    );
};

export default LoginForm;
