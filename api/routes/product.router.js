const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');

productRouter.route('/products/list')
    .get(productController.list);

productRouter.route('/products/popular')
    .get(productController.getPopularProducts);

productRouter.route('/products/popularCategories')
    .get(productController.getCategoriesByPopularProducts);

productRouter.route('/products/expensiveCategories')
    .get(productController.getExpensiveCategories);

productRouter.route('/products/buy')
    .post(productController.buyProducts);

productRouter.route('/checks/average')
    .get(productController.getAverageCheck);

module.exports = productRouter;