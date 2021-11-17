const mongoose = require('mongoose');

const dbConnect = () =>{
    //connect DB
mongoose.connect('mongodb+srv://tuan:rlW2Yyrjd7URSDkt@cluster0.s6brn.mongodb.net/book-keeping', {
    // useFindAndModify: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useNewUrlParser: true,
}).then(()=>console.log('Db Connected')).catch(err => console.log(err));
};

module.exports = dbConnect;