const routes = require('express').Router();
const userRouter = require('./user.router');
const crudRouter = require('./crud.router');
const productRouter = require('./product.router');

routes.use('/', userRouter);
routes.use('/', crudRouter);
routes.use('/', productRouter);

module.exports = routes;