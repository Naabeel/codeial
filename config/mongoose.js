const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/codeial_development');
 const db = mongoose.connection;

 db.on('error', console.error.bind(console , 'error while conecting to the database'));

 db.once('open', function(){
    console.log('successfuly connected to the database')
 });

 module.exports = db;