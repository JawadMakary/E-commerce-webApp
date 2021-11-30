import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../assets/context";
import '../Styles/LoginScreen.css'
import Particles from 'react-particles-js';
import logo from '../images/logo2.png'
import {auth} from '../components/firebase'

function SignUpScreen() {
     
 const signUp=(e)=>{
  
    e.preventDefault();
 
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
 
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log('User signed up!');
  }).catch(error=>{
   alert(error.message)
 });}
 
   
   
   
 
   const initState = {
     email: "",
     password: ""
   };
   const [credential, setCredential] = useState(initState);
   const { loginWithMail } = useAuth();
   const handleChange = (e) => {
     const { name, value } = e.target;
     setCredential({ ...credential, [name]: value });
   };
 
   const { user } = useAuth();
   const history = useHistory();
   useEffect(() => {
     if (user) {
       if (user.email === "admin@gmail.com") {
         history.push("/AdminScreen");
       } else {
         history.push("/ProductScreen");
       }
     }
   }, [user]);

    return (
        <div className="loginScreen__particles">
        <Particles
params={{
"particles": {
"number": {
    "value": 50
},
"size": {
    "value": 3
}
},
"interactivity": {
"events": {
    "onhover": {
        "enable": true,
        "mode": "repulse"
    }
}
}
}} 
height ="100vh"
/>
  

    
 
    <div className="SignupScreen">
            <img style={{width:'100%',textAlign:'center',marginLeft:20}} className="logo" src={logo} alt=""/>
                <input autoComplete="off" id="email" name="email" onChange={handleChange}  type="text" placeholder="Email"/>
                <input  autoComplete="off" id="password" name="password" onChange={handleChange}  type="password" placeholder="Password"/>
   
     
                
                  
     <button id="signup-btn" onClick={signUp}>Sign Up Now</button>
   
   
      
    
                   
      <Link style={{textDecoration:'none'}} className="SignupScreen__gray" to="/LoginScreen">
      <span className="SignupScreen__gray">
                  Already A user?
                    </span>
        <button  className="backLogin">
        Login
        </button>
        </Link>
    </div>
    </div>

    )
}
export default SignUpScreen
