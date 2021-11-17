const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const app = express();

//DB connect
dbConnect();


//Routes
//Users routes

//Register
app.post('/api/users/register', (req, res)=>{
    res.send('Register route');
});

//Login
app.post('/api/users/login', (req,res)=>{
    res.send('Login route');
});

//Update User
app.put('/api/users/update', (req,res)=>{
    res.send('Update Route');
});

//Delete User
app.delete('/api/users/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch Users
app.get('/api/users', (req,res)=>{
    res.send('Fetch users');
});
 
//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is up and runing ${PORT}`);
});



//tuan
//rlW2Yyrjd7URSDkt
//mongodb+srv://tuan:<password>@cluster0.s6brn.mongodb.net/test