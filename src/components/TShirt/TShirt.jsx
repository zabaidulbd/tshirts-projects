import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {

    const { picture, name, gender, price } = tshirt;
    return (
        <div className='shop-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>{gender}</h4>
            <p>price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;