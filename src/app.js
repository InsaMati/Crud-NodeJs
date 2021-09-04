const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
const customerRoutes = require('./routers/customer');
const { urlencoded } = require('express');

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'root',
    password:'root',
    port: '3306',
    database: 'crudnodejsmysql'
}, 'single'))

app.use(express.urlencoded({extended: false}));

app.use('/',customerRoutes);

// servers
app.listen(app.get('port'),()=>{

    console.log('Server on port 3000')

})