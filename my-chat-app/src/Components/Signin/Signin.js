import React from 'react';
import "./signin.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Signin = ({ auth }) => {
  const signinwithgoogle = (e) => {
    e.preventDefault();
    if(auth){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
  };

  return (
    <div className='signin-container'>
      <h2 className='head-signin'>Sign in to Start Chat</h2>
      <button className='signin-btn' onClick={signinwithgoogle}>
        <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' className='google' alt='Google logo' />
        <span className='btn-txt'> Sign in with Google</span>
      </button>
    </div>
  );
}

export default Signin;
