//const User = require('./models/user.model')
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcryptjs')
//const mongoose = require('mongoose')
//const connectDB    = require('./config/db');

const express = require('express')
const app = express()
const cors = require('cors')  //needed only on local machine due to diff in ports, on prod it will be same
const path    = require('path');
const dotenv  = require('dotenv');
const morgan  = require('morgan');
const controllers = require('./controllers/v1/controllers')

app.use(cors()) //only in local machine where ports are diff
app.use(express.json())

dotenv.config({ path: './config/config.env'} );
//const secret = process.env.SECRETCODE || 'mysupersecretcode900'

const PORT   = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.post('/api/register', controllers.createUser);
app.post('/api/login', controllers.loginUser);
app.get('/api/quote', controllers.getQuote);
app.post('/api/quote', controllers.createQuote);

app.listen(PORT, console.log(
	`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
));

// console.log('Starting DB connection');
// connectDB();
