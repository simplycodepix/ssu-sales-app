import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api';

import ProductCard from '../ProductCard/ProductCard';

import './Products.scss';
import Pagination from '../Pagination/Pagination';

export const Products = ({ interval = false, addToCart }) => {
    const [loading, setLoading] = useState(true);
    const [productsCount, setProductsCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (interval) {
            loadProducts({ limit: false, offset: 0, interval: 1 });
        } else {
            loadProducts({ limit: 12, offset: 0 });
        }
    }, [interval]);

    const loadProducts = async ({ limit, offset, interval }) => {
        setLoading(true);
        const { products, count } = await getProducts({ limit, offset, interval });
        setProducts(products);
        setProductsCount(count);
        setLoading(false);
    }

    const changePage = (index) => {
        setCurrentPage(index);
        loadProducts({ limit: 12, offset: (index - 1) * 12 })
    }

    return (
        <div className="products">
            <div className="container">
                {loading && <div className="loading">Loading...</div>}
                <div className="products-list">
                    {products.map(product => <ProductCard noForm={interval} updateCart={addToCart} key={`product_${product.id}`} product={product} />)}
                </div>
                {!interval && <Pagination onClick={changePage} count={productsCount} currentPage={currentPage} />}
            </div>
        </div>
    );
}

export default Products;