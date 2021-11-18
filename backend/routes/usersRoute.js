const express = require('express');
const User = require('../models/User');

const usersRoute = express.Route();

//Register
usersRoute.post('/register', async(req, res)=>{
    try{
        const {name, email, password}=req.body;
        const user = await User.create({name, email, password});
        //console.log(req.body);
        console.log(user);
        res.send(user);
} catch(error){
    console.log(error);
}
});

//Login
usersRoute.post('/login', (req,res)=>{
    res.send('Login route');
});

//Update User
usersRoute.put('/update', (req,res)=>{
    res.send('Update Route');
});

//Delete User
usersRoute.delete('/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch Users
usersRoute.get('/', (req,res)=>{
    res.send('Fetch users');
});

module.exports={usersRoute};