import React from 'react';

import './BuyProductForm.scss';

export const BuyProductForm = ({ onSubmit, onChange }) => (
    <div className="product-form">
        <div className="form-group">
            <input type="number" placeholder="quantity" onChange={onChange} required />
        </div>
        <button className="btn small" onClick={onSubmit}>Add to cart</button>
    </div>
);

export default BuyProductForm;