import React from 'react'
import { useStateValue } from '../assets/StateProvider'
import '../Styles/Product.css'



function Product({id,title,image,price,rating}) {
//const[{state},dispatch]
    const[{basket},dispatch]=useStateValue()
/*    console.log("this is the basket->>>",basket);
 */    const addToBasket=()=>{
    //dispatch the item into data layer
    //dispatch->shoot action to the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,}
        })
}
    return (
        <div className="products">
            <div className="products__info">
                <p>{title}</p>
                <p className="products__price">
                  
                    <strong>{price}</strong>
                    <small>LBP</small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => ( <p>⭐</p>))}
                   
                    
                </div>
            </div>
            <img className="products__image" src={image} />
            <button onClick={addToBasket} className="products__btn"   >add to basket</button>
        </div>
    )
}

export default Product
