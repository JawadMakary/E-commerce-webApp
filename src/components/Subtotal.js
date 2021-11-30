import React from 'react'
import '../Styles/Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../assets/StateProvider'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getBasketTotal } from '../assets/reducer'

function Subtotal() {
  const [{basket},dispatch] =useStateValue()

    return (
        <div className="subtotal">
           <CurrencyFormat
             renderText={(value) => (
             <> 
             <p className="p"> Subtotal ({basket.length } items):
             <br/>
            
           <strong> {value} </strong>
           
           
             </p>
             </>
            )}
            decimalScale={2}
            value= {getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"LBP"}
              />
              <Link style={{textDecoration:'none'}} to="/PaymentScreen">
               
                {/* <button>Proceed to checkout</button> */}
                <p className="pc">Proceed</p>
               
             
              </Link>
            
        </div>
    )
}export default Subtotal

