const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
      type: String,
      trim: true,
      required: [true, 'Missing transaction text']  
    },
    amount: {
      type: Number,
      required: [true, 'Missing transaction amount']  

    },
    type: {
      type: String,
      trim: true,
      enum: {
        values: ['expense', 'income'],
        message: 'Invalid transaction type {VALUE}'
      },
      required: [true, 'Missing transaction type']  
    },
    datetime: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);