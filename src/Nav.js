import React, { useEffect, useState } from 'react';
import './css/Nav.css';

import { auth } from './firebase';

import { signOut } from 'firebase/auth';

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);

    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
          className='logo'
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRAoxBRPwmBYIVUcYnh3RlV_65Rj6JYtST6ajpPc&s'
          onClick={() => signOut(auth)}
          className='nav__avatar'
        />
      </div>
    </div>
  );
}

export default Nav;
