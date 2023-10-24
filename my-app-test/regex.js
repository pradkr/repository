'use strict'

const message = '100 Rivercomb is 200 miles from the station and about 150 miles from the airport!!';

const messageKms = message.replace(/\d+(?=\s*miles)/g, miles => miles * 1.609 ).replace(/miles/g,'kms');
console.log(messageKms)
const punctuations = "Hi! There, Good-Afternoon User_10"
console.log(punctuations)
console.log(punctuations.replace(/[\W_-]/g,''))