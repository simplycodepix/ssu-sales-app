import React, { useState, useEffect } from 'react';
import { getAverageCheck, getPopularProducts, getCategoriesByProductIds, getExpensiveCategories } from '../api';
import Products from '../components/Products/Products';
import ProductCard, { ProductCategories } from '../components/ProductCard/ProductCard';

const AverageCheck = ({ price, interval }) => (
    <div className="container">
        <div className="average-check-row">
            <div className="average-check-title">
                Average check for last {interval} days:
            </div>
            <div className="average-check-value">
                {price}
            </div>
        </div>
    </div>
);

const PopularProduct = ({ product, count }) => {
    return (
        <div className="container">
            <h2 className="stats-page-title">
                Most Popular Product - {count} sales
            </h2>
            <ProductCard noForm={true} product={product} />
        </div>
    );
};

export const StatsPage = () => {
    const [averageCheck, setAverageCheck] = useState(0);
    const [popularProduct, setPopularProduct] = useState(false);
    const [topProducts, setTopProducts] = useState([]);
    const [topCategories, setTopCategories] = useState([]);
    const [expensiveProducts, setExpensiveProducts] = useState([]);
    const [expensiveCategories, setExpensiveCategories] = useState([]);

    useEffect(() => {
        loadAverageCheck({ interval: 7 });
        loadPopularProducts({ interval: 30 });
        loadPopularCategories();
        loadExpensiveCategories();
    }, []);

    const loadAverageCheck = async ({ interval }) => {
        const { average } = await getAverageCheck({ interval });
        setAverageCheck(average);
    }

    const loadPopularProducts = async ({ interval }) => {
        const { result } = await getPopularProducts({ interval, limit: 1 });
        setPopularProduct(result);
    }

    const loadPopularCategories = async () => {
        const { result } = await getCategoriesByProductIds({ limit: 10, interval: 10 });
        const categories = result.categories.map(one => one.name);
        setTopProducts(result.products);
        setTopCategories(categories);
    }

    const loadExpensiveCategories = async () => {
        const { result } = await getExpensiveCategories({ limit: 5, interval: false });
        const categories = result.categories.map(one => one.name);
        setExpensiveProducts(result.products);
        setExpensiveCategories(categories);
    }

    return (
        <div className="stats-page">
            {averageCheck && <AverageCheck interval={7} price={averageCheck} />}
            <div className="container">
                <h2 className="stats-page-title">
                    Products Bought Yesterday
                </h2>
            </div>
            <Products interval={true} />
            {popularProduct && <PopularProduct count={popularProduct.count} product={popularProduct} />}
            <div className="container">
                <h2 className="stats-page-title">
                    Categories for top 10 products
                </h2>
                <ProductCategories categories={topCategories} />
            </div>
            <div className="products">
                <div className="container">
                    <div className="products-list">
                        {topProducts.map(product => <ProductCard noForm={true} key={`product_${product.id}`} product={product} />)}
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="stats-page-title">
                    Categories for the most expensive products
                </h2>
                <ProductCategories categories={expensiveCategories} />
            </div>
            <div className="products">
                <div className="container">
                    <div className="products-list">
                        {expensiveProducts.map(product => <ProductCard noForm={true} key={`product_${product.id}`} product={product} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;