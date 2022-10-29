const express =  require('express');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const app= express();
const port = 8000;

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');


app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use(express.static('./Assets'));


app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }

    console.log(`Server is up and running on port: ${port}` );
});