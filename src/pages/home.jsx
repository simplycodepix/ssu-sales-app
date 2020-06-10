import React, { useState, useContext } from 'react';
import Products from '../components/Products/Products';
import { buyProducts } from '../api';
import { AuthContext } from '../store/AuthProvider';

const CartItem = ({ product, quantity }) => (
    <div className="cart-item">
        <div className="cart-item-row">
            <div className="cart-item-name">Product: </div>
            <div className="cart-item-value">{product.name}</div>
        </div>
        <div className="cart-item-row">
            <div className="cart-item-name">Quantity: </div>
            <div className="cart-item-value">{quantity}</div>
        </div>
        <div className="cart-item-row">
            <div className="cart-item-name">Total: </div>
            <div className="cart-item-value">{product.price * quantity}</div>
        </div>
    </div>
);

const Cart = ({ products = [], onBuy }) => {
    return (
        <div className="cart">
            <div className="container">
                <h2 className="cart-title">Cart</h2>
                {products.map(one => <CartItem key={one.product.name + one.quantity} product={one.product} quantity={one.quantity} />)}
                <button onClick={onBuy} className="btn">Buy</button>
            </div>
        </div>
    )
};

export const HomePage = () => {
    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);

    const addToCart = ({ product, quantity }) => {
        if (cart.length > 0) {
            let alreadyInCart = cart.find(one => one.product.id === product.id);
            if (alreadyInCart) return;
        }

        let newCart = [...cart];
        newCart.push({ product, quantity });
        setCart(newCart);
    }

    const handleBuy = async (event) => {
        event.preventDefault();
        const { success } = await buyProducts({ products: cart, user_id: user.id });
        if (success) {
            setCart([]);
            window.location.reload(false);
        }
    }

    return (
        <>
            {cart.length > 0 && <Cart onBuy={handleBuy} products={cart} />}
            <Products addToCart={addToCart} />
        </>
    )
};

export default HomePage;