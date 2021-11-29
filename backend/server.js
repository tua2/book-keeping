const express = require('express');
//const mongoose = require('mongoose');
//const User = require('./models/User');
const dotenv = require('dotenv');

const dbConnect = require('./config/dbConnect');
const { usersRoute } = require('./routes/usersRoute');
const error=require('./middlewares/errorMiddlewareHandler');
const booksRoute = require('./routes/booksRoute');
const app = express();

dotenv.config();

//DB connect
dbConnect();

//Passing body data
app.use(express.json());

//Routes
//Users routes
app.use('/api/users', usersRoute);

//Books routes
app.use('/api/books', booksRoute);

//console.log(process.env);

//Error middleware
app.use(error.errorMiddlewareHandler);
/*
//Register
app.post('/api/users/register', async(req, res)=>{
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
*/

//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and runing ${PORT}`);
});



//tuan
//rlW2Yyrjd7URSDkt
//mongodb+srv://tuan:<password>@cluster0.s6brn.mongodb.net/test