const Product = require('../models/Product.model');
const Checks = require('../models/Checks.model');
const Category = require('../models/Category.model');

exports.list = async (req, res) => {
    const paginationData = {
        limit: parseInt(req.query.limit) ? parseInt(req.query.limit) : 12,
        offset: parseInt(req.query.offset) ? parseInt(req.query.offset) : false,
        interval: parseInt(req.query.interval) ? parseInt(req.query.interval) : false
    };

    Product.getCountTotal(({ count }) => {
        if (!paginationData.interval) {
            Product.getProducts(paginationData, ({ result }) => {
                res.json({ products: result, count });
            });
        } else {
            Product.getProductsByDate(paginationData, ({ result }) => {
                res.json({ products: result, count });
            });
        }
    });
};

exports.getAverageCheck = async (req, res) => {
    const interval = parseInt(req.query.interval) ? parseInt(req.query.interval) : false;

    Checks.getAverageCheck({ interval }, ({ result }) => {
        res.json({ average: result && result.average ? result.average : 0 });
    });
};

exports.getPopularProducts = async (req, res) => {
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : false;
    const interval = parseInt(req.query.interval) ? parseInt(req.query.interval) : false;

    Product.getPopularProducts({ interval, limit }, ({ result }) => {
        res.json({ result: result[0] });
    });
};

exports.getCategoriesByPopularProducts = async (req, res) => {
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : false;
    const interval = parseInt(req.query.interval) ? parseInt(req.query.interval) : 30;

    let data = {};

    Product.getPopularProducts({ interval, limit }, ({ result }) => {
        const ids = result.map(one => one.id);
        data = { ...data, products: result }
        Category.getCategoriesByProductIds({ ids }, ({ result }) => {
            data = { ...data, categories: result }
            res.json({ result: data });
        });
    });
};

exports.getExpensiveCategories = async (req, res) => {
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : false;
    const interval = parseInt(req.query.interval) ? parseInt(req.query.interval) : 30;

    let data = {};

    Product.getExpensiveProducts({ interval, limit }, ({ result }) => {
        const ids = result.map(one => one.id);
        data = { ...data, products: result }
        Category.getCategoriesByProductIds({ ids }, ({ result }) => {
            data = { ...data, categories: result }
            res.json({ result: data });
        });
    });
};

exports.buyProducts = async (req, res) => {
    const data = req.body;
    const products = data.products;
    const user_id = data.user_id;

    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        const one = products[i];
        totalPrice += one.product.price * parseInt(one.quantity);
    }

    let newCheck = new Checks({ user_id, price_total: totalPrice });

    Checks.addCheck(newCheck, ({ check_id }) => {
        if (check_id) {
            for (let i = 0; i < products.length; i++) {
                const one = products[i];

                const checkItem = {
                    check_id: check_id,
                    product_id: one.product.id,
                    quantity: one.quantity,
                    price_per_unit: one.product.price,
                    status: 'paid'
                };

                Checks.addCheckItem(checkItem, () => {
                    Product.updateProductStock({ in_stock: parseInt(one.product.in_stock) - parseInt(one.quantity), id: one.product.id }, ({ result }) => {
                        console.log(result);
                    });
                });
            }
            res.json({ success: 'Thank you!' });
        } else {
            res.json({ error: 'Error buy' })
        }
    })
};