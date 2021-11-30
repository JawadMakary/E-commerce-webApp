import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/HomeScreen.css'
import { useAuth } from "../assets/context";
import Particles from 'react-particles-js';

export default function HomeScreen() {
    const { user, logout } = useAuth();
    return (
        <div className="loginScreen">
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
<div className="loginScreen__background">

 
  
        <div className="loginScreen__gradient"></div>
</div>
<div className="loginScreen__body">
   
        <h1 className="loginscreen_h1">Whatever Your Heart Desires.</h1>
        <h2 className="loginscreen_h2">Demand Your Products From Anywhere , At Anytime</h2>
       
        <div className="loginScreen__input">
               
                 <Link to="/loginScreen" ><button className="loginScreen__getStarted">
                 Get Started  </button></Link>
               
          
        </div>
  
   
  

</div>
  

</div>
              
      



    );
  }
