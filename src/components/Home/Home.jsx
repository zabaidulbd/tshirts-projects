import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Orders from '../Orders/Orders';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {

        const exits = cart.find(ts => ts._id === tshirt._id);
        if (exits) {
            toast("You have already add this t-shirt!");
        }
        else {
            const newTShirt = [...cart, tshirt];
            setCart(newTShirt)
        }

    }

    const handleRemoveFromCart = (id) => {

        const remaining = cart.filter(pd => pd._id !== id)
        setCart(remaining)

    }

    return (

        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} ></TShirt>)
                }
            </div>
            <div className='order-container'>
                <Orders cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Orders>

            </div>


        </div>
    );
};

export default Home;