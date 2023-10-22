'use strict';

const perfumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
  },
];


const mostExpensive = [...perfumes].sort((a, b) => b.cost - a.cost)[0];
const cheapest      = [...perfumes].sort((a, b) => a.cost - b.cost)[0];

console.log(`Most Expensive: ${mostExpensive.brand} at $${mostExpensive.cost}`);
console.log(`Cheapest: ${cheapest.brand} at $${cheapest.cost}`);
