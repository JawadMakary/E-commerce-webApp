import React from 'react'
import '../Styles/CheckoutProduct.css'
import {useStateValue} from '../assets/StateProvider'
//same props as productScreen
function CheckoutProduct({id,image,title,price,rating}) {
    //to pull or change info from the data layer(dispatch)
    const[{basket},dispatch]=useStateValue()
    //page for the basketItems
//remove item from the basket
    const removeFromBasket=()=>{
        console.log('test');
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
            
        })



    }



    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>LBP</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove from cart</button>

            
            </div>
            
        </div>
    )
}

export default CheckoutProduct
