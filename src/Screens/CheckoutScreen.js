import React from 'react'
import '../Styles/CheckoutScreen.css'
import post from '../images/post.png'
import { Link } from 'react-router-dom'
import Subtotal from '../components/Subtotal'

import { useStateValue } from '../assets/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'
//to call item from basket->useStateValue
function CheckoutScreen() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <Link to="/ProductScreen">

               
                <img className="checkout__ad" src={post} alt=""/>
                </Link>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/* map these values from the basket*/}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
               <Subtotal />
            </div>
            
        </div>
    )
}

export default CheckoutScreen
