const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// imports
const customerRoutes = require('./routers/customer');
const { urlencoded } = require('express');

// settings

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))

// PHP, FIREBASE, MYSQL, MONGODB, POSGRESQL 

// middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'root',
    password:'root',
    port: '3306',
    database: 'crudnodejsmysql'
}, 'single'))

app.use(express.urlencoded({extended: false}));

// routers

app.use('/',customerRoutes);

app.use(express.static(path.join(__dirname,'public')));


// servers
app.listen(app.get('port'),()=>{

    console.log('Server on port 3000')

})