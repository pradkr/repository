'use strict';

const products = [
  {
    id: 1,
    name: 'Oranges',
    quantity: 2,
    cost: 1.2,
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    quantity: 2,
    cost: 65,
  },
  {
    id: 3,
    name: 'Coke Zero',
    quantity: 12,
    cost: 1.45,
  },
];

const totalCost = (item) => {
  return `Total Cost: $${item.quantity * item.cost}
------------------------------`;
};

for (const product of products) {
    for (const prop in product) {
      console.log(`${prop}: ${product[prop]}`);
    }
    console.log(totalCost(product));
}
//-------------------
'use strict';

const books = [
  {
    id: 1,
    title: 'Freakonomics',
  },
  {
    id: 2,
    title: 'The Design of Everyday Things',
  },
  {
    id: 3,
    title: 'Shantaram',
  },
  {
    id: 4,
    title: 'Contact',
  },
];

console.log('My Favourite Books');

// Your code here...
books.forEach( (elem, index) => console.log(`${index + 1}. ${elem.title}`) );

//////////////////////////
const numbers = [1, 2, 3]
const squaredNumbers = []
numbers.forEach(n => squaredNumbers.push(n*n))
console.log(squaredNumbers)
//////////////////////

const numbers1 = [1, 2, 3]
const index = numbers1.findIndex(n=>n===2)
console.log(index)

//////////

'use strict';

//const genStars = (count) => '*';
const genStars = (count) => Array.from(Array(count), () => '*');

for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}
//////////////
//spread ...array
'use strict';
const scoreCards = [
  {
    id: 1,
    student: 'Joe M',
    scores: [54, 76, 65],
  },
  {
    id: 2,
    student: 'Jane K',
    scores: [68, 85, 74],
  },
  {
    id: 3,
    student: 'Chris P',
    scores: [55, 88, 80],
  },
];

const calculatePercentile = function (english, compSc, mathematics) {
  return (((english + compSc + mathematics) / 300) * 100).toPrecision(4);
};

for (let x of scoreCards) {
    let scoreArray = x.scores;
    console.log(`${x.student} has scored ${calculatePercentile(...scoreArray)}%`);
}