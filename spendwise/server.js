const express = require('express');
const dotenv  = require('dotenv');
const morgan  = require('morgan');
const colors  = require('colors');
const connectDB    = require('./config/db');
const transactions = require('./routes/transactions');

dotenv.config({ path: './config/config.env'} );
const app = express();
app.use(express.json());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
        //.green.bold
    ));

console.log('Starting DB connection');
connectDB();