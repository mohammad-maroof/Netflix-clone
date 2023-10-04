import React, { useEffect } from 'react';
import Login from './Login';
import HomeScreen from './HomeScreen';
import {useDispatch, useSelector} from'react-redux';
import {login, logout,selectUser } from './features/userSlice';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';




function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,user=>{
      if(user){
        //login
        dispatch(login({
          uid:user.uid,
          email:user.email
        }))
      }
      else{
        //logout
        dispatch(logout)
      }
    })
    return unsubscribe;
   },[])
  return (
    <div className="App">
      {
        !user ?(<Login/>) :
        (<HomeScreen/>)
      }
      
     
    </div>
  );
}

export default App;






//$env:NODE_OPTIONS = "--openssl-legacy-provider"
//Hosting URL: https://netflix-clone-c836b.web.app
