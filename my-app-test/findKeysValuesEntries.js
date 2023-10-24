'use strict';

const book = {
  isbn: '0-671-00410-7',
  title: 'Contact',
  author: 'Carl Sagan',
  publisher: 'Pocket Books',
};

const findKey = (val, obj) => Object.keys(obj).includes(val);
console.log(`ISBN: ${findKey('isbn', book) ? 'Yes' : 'No'}`);

const findValue = (val, obj) => Object.values(obj).includes(val);
console.log( `Did Carl Sagan write the book? ${ findValue('Carl Sagan', book) ? 'Yes' : 'No' }` );

for ( const [key, value] of Object.entries(book) ) {
    console.log(`${key}: ${value}`);
}