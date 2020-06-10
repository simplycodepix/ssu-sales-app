const crudRouter = require('express').Router();
const crudController = require('../controllers/crud.controller');

// Users
crudRouter.route('/crud/users/get')
    .get(crudController.getUserTableData);

crudRouter.route('/crud/users/getSingle')
    .get(crudController.getSingleUser);

crudRouter.route('/crud/users/delete')
    .post(crudController.deleteUser);

crudRouter.route('/crud/users/update')
    .post(crudController.updateUser);

module.exports = crudRouter;