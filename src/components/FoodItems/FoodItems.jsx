import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import "./FoodItem.css";
import { StoreContext } from '../Context/StoreContext';

export default function FoodItems({ id, name, price, description, image }) {
    // Accessing context and functions from StoreContext
    const { cartItems, addToCard, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt='' />
                {!cartItems[id] ? (
                    // If item not in cart, display add button
                    <img className='add' onClick={() => addToCard(id)} src={assets.add_icon_white} alt='' />
                ) : (
                    // If item in cart, display counter with remove and add buttons
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCard(id)} src={assets.add_icon_green} alt='' />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className='food-item-des'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
}