const User = require('../models/User.model');

// Users
exports.getUserTableData = async (req, res) => {
    User.getUsers(({ result }) => {
        res.json({ users: result });
    })
};

exports.getSingleUser = async (req, res) => {
    const user_id = parseInt(req.query.user_id);

    User.getSingle({ user_id }, ({ result }) => {
        res.json({ user: result });
    })
};

exports.deleteUser = async (req, res) => {
    const user_id = parseInt(req.body.user_id);
    if (user_id === 1) return res.json({ error: "Can't delete user" });
    User.deleteUser({ user_id }, (result) => {
        res.json(result);
    });
};

exports.updateUser = async (req, res) => {
    const user_id = parseInt(req.body.id);

    const userData = {
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        age: parseInt(req.body.age),
        sex: req.body.sex,
        role: req.body.role
    };

    User.updateUser({ user_id, data: userData }, (result) => {
        res.json(result);
    });
};
