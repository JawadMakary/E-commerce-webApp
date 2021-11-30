import React, { useState } from 'react'
import '../Styles/PaymentScreen.css'
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import db from '../components/firebase'
import logo from '../images/logo2.png'
import { useStateValue } from '../assets/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'
import { getBasketTotal } from '../assets/reducer'
import CurrencyFormat from "react-currency-format"

function PaymentScreen() {
   
    const[{basket},dispatch]=useStateValue();
    const val =getBasketTotal(basket)
    console.log(val);
    const[value,setVal]=useState(0)
    const[name,setName]=useState("")
    const[card,setCard]=useState("")
    const[address,setAddress]=useState("")
    const[phone,setPhone]=useState("")
    const[status,setStatus]=useState("pending")

    const handleSubmit =(e)=>{
      console.log(value);
      e.preventDefault();
      db.collection('payment').add({
          name:name,
          card:card,
          address:address,
          phone:phone,
          status:status,
          value:val,
        

      })
      .then(()=>{
          alert("payment succesful!")
      })
      .catch((error)=>{
          alert(error.message)
      })
      setPhone("")
      setName("")
    
      setCard("")
      setAddress("")
      setVal("")
    //   setBasketItem([])
      
      
  }
            
    return (
        <div className="payment__container">
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
        <div className="payment">
      
            {/* <img className="logo" src={logo} alt=""/> */}
            <form className="payment__form" onSubmit={handleSubmit}>     
                <label> Full Name:</label>
                <input type="text" placeholder="Please enter your name" size="30" value={name} onChange={(e)=>setName(e.target.value)} required/> 
                <label>Address:</label>
                <input type="text" minLength={5}  placeholder=" Please enter your address" value={address} onChange={(e)=>setAddress(e.target.value)}  required/>
                <label>Nb of Items bought:</label>
                <input type="text" value={basket.length } disabled style={{backgroundColor:'white'}}/>

                <label>Total Price:</label>
                <CurrencyFormat
                renderText={(value) => (
                <>
                
                <input type="hidden" value={value}  disabled onChange={(e)=>setVal(e.target.value)} style={{backgroundColor:'white'}}/> 
                </>
                )}
                decimalScale={2}
                value= {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"LBP"}
                />
                <input type="text" value={val}  disabled onChange={(e)=>setVal(e.target.value)} style={{backgroundColor:'white'}}/> 

                <label>Phone Nb:</label>
                <input type="text" maxLength={12} minLength={8} placeholder=" Please enter your phone_nb" value={phone} onChange={(e)=>setPhone(e.target.value)}  required/> 
                <label>Card nb:</label>
                <input type="text" required maxLength={16} minLength={16} placeholder=" Please enter your credit_card_nb" value={card} onChange={(e)=>setCard(e.target.value)}  required/>
         <button type="submit">Confirm your payment</button>
         <Link style={{textDecoration:'none'}} to="/ProductScreen">
         <p className="payment__home">Back to Home Screen</p>
         </Link>    
            </form>
        </div>
        </div>
    )
}
export default PaymentScreen
