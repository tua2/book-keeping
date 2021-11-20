const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const usersRoute = express.Router();

//Register
usersRoute.post('/register', asyncHandler (async (req, res) => {
    const {name, email, password}=req.body;

    const userExists =  await User.findOne({email: email});
    if(userExists){
        throw new Error('User Exist');
    }
    const userCreated=await User.create({email, name, password});

    res.json({
        _id: userCreated._id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.password,
        token: generateToken(userCreated._id), //login using jwt(jsonwebtoken)
    });
}));
/*
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
*/

//Login
usersRoute.post('/login', asyncHandler(async(req, res) => {
    const{email, password}=req.body;

    const user = await User.findOne({email});

    if(user && (await user.isPasswordMatch(password))){
        // set status code
        res.status(200);

        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.password,
            token: generateToken(user._id), //login using jwt(jsonwebtoken)
        });
        
    }else {
        res.status(401);
        throw new Error('Invalid credentials');
    
    }

}));

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