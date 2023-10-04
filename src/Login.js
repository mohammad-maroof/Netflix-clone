import React, { useState } from 'react';
import './css/Login.css';
import SingUp from './SingUp';

function Login() {
  const [SignIn, SetSignIn] = useState(false);
  const showSignUp = (e) => {
    e.preventDefault();
    SetSignIn(true);
  };
  return (
    <div className='login'>
      <div className='login__ header'>
        <img
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
          className='login__logo'
        />
        <button className='login__button'>Sign in</button>
      </div>
      <div className='login__body'>
        {SignIn ? (
          <SingUp />
        ) : (
          <>
            <h1> Unlimited films, TV programmes and more.</h1>
            <h2>Watch Anywhere, Cancel at any time.</h2>
            <h3>
              {' '}
              Ready to Watch? Enter your email to create or restart your
              membership
            </h3>
            <form className='login__form' onSubmit={showSignUp}>
              <input type='text' placeholder='Email Address' />
              <button> Get Started </button>
            </form>
          </>
        )}
      </div>

      <div className='login__gradient'></div>
    </div>
  );
}

export default Login;
