import React, { useRef } from 'react'
import "./css/Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register =(e)=>{
    e.preventDefault();
    
    createUserWithEmailAndPassword (
      auth,
      emailRef.current.value,
      passwordRef.current.value
      ).then(authUser=>{
        console.log(authUser)
      }).catch(error=>{
        alert(error.message)
        
      })
  }
  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser=>{
    //  console.log(authUser)
    }).catch(error=>{
      alert(error.message)
      
    })
  }
  return (
    <div className='signUpScreen'>
      <form>
        <h1> Sign Up</h1>
        <input ref={emailRef}  type="email"placeholder='Email'/>
        <input ref={passwordRef} type="password"placeholder='Password'/>
        <button onClick={signIn}> Sign In </button>

        <h4> New to Netflix <span onClick={register}>Sign Up Now. </span></h4>
      </form>
      
      </div>
  )
}

export default SingUp