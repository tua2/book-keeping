const express = require('express');
const User = require('../models/User');
// const asyncHandler = require('express-async-handler');
const usersRoute = express.Router();

//Register
usersRoute.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            const err = new Error('User Exist');
            err.statusCode = 400;
            throw err;
        }
        const userCreated = await User.create({ email, name, password });
        return res.status(200).json(userCreated);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return res.status(err.statusCode).json({ message: err.message });
    }
}
);

//Login
usersRoute.post('/login', (req, res) => {
    res.send('Login route');
});

//Update User
usersRoute.put('/update', (req, res) => {
    res.send('Update Route');
});

//Delete User
usersRoute.delete('/:id', (req, res) => {
    res.send('Delete route');
});

//Fetch Users
usersRoute.get('/', (req, res) => {
    res.send('Fetch users');
});

module.exports = { usersRoute };