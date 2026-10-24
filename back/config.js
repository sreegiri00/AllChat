const mongoose = require('mongoose');
require('dotenv').config();

const DB =process.env.DB_URL
function dBConnection (){

    mongoose.connect(`${DB}`)
    .then(()=>console.log('data base connected successfully...'))
    .catch(()=>console.log("not connected..."))
}

dBConnection()
 module.exports = dBConnection;