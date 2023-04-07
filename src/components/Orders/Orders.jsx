import React from 'react';

const Orders = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h2>Order Review</h2>
            <p>total: {cart.length}</p>
            <p>{
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button>
                </p>)
            }</p>
        </div>
    );
};

export default Orders;