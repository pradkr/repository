'use strict';

const perfumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
    stock: 10,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
    stock: 12,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
    stock: 5,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
    stock: 8,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
    stock: 2,
  },
];

const totalInStock = perfumes.reduce( (prev, curr) => prev + curr.stock, 0);
const totalWorth   = perfumes.reduce( (prev, curr) => prev + curr.cost * curr.stock, 0);

console.log(`Total items in stock: ${totalInStock}`);
console.log(`Total stock worth: $${totalWorth}`);
