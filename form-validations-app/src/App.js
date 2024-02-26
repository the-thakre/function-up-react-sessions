import './App.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from './components/LoginForm';

function App() {

  const showToastMessage = () => {
    toast.success("Success Notification !");
    toast.error('Error occured')
  };

  return (
    <div className="App">
      <div>
        <button onClick={showToastMessage}>Notify</button>
        {/* This component is for testing react toastify library */}
        <ToastContainer />

        {/* This is implementation for from validations */}
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
