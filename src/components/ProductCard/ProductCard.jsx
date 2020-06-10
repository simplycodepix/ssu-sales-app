import React, { useState } from 'react';

import './ProductCard.scss';
import BuyProductForm from '../BuyProductForm/BuyProductForm';

const ProductRow = ({ className, title, value, children }) => (
    <div className={`product-card-row ${className ? className : ''}`}>
        <div className="product-card-row-title">{title}</div>
        {value && <div className="product-card-row-value">{value}</div>}
        {children && <div className="product-card-row-value">{children}</div>}
    </div>
);

export const ProductCategories = ({ categories = [] }) => (
    <div className="product-card-categories">
        <div className="product-card-categories-title">
            Categories:
        </div>
        <div className="product-card-categories-list">
            {categories.map(category => <div key={category + Math.random()} className="product-card-category">{category}</div>)}
        </div>
    </div>
);

export const ProductCard = ({ updateCart, product, noForm = false }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [inCart, setInCart] = useState(false);
    const getCategories = (categories) => {
        if (!categories) return false;
        return categories.split(',');
    };

    const handleQuantityChange = (event) => {
        let { value } = event.target;

        if (value <= 0) return setError('Bad quantity');
        if (value > product.in_stock) return setError('Bad quantity');

        if (error) setError('');

        setQuantity(value);
    }

    const addToCart = (event) => {
        event.preventDefault();
        if (inCart) {
            setSuccess('');
            return setError('Already in cart');
        }

        setInCart(true);
        setSuccess('Added to cart');
        updateCart({ product, quantity });
    }

    return (
        <div className="product-card">
            <div className="product-card-content">
                <ProductRow className="row" title="ID:" value={product.id} />
                <ProductRow className="row" title={product.name} />
                <ProductRow className="row center" title="Price:" value={product.price} />
                <ProductRow className="row center" title="In Stock:" value={product.in_stock} />
                {product.categories && <ProductCategories categories={getCategories(product.categories)} />}
                {!noForm && <BuyProductForm onSubmit={addToCart} onChange={handleQuantityChange} />}
                {error && <div className="form-error">{error}</div>}
                {success && <div className="form-success">{success}</div>}
            </div>
        </div>
    );
};

export default ProductCard;