'use strict';

const shoppingList = ['Apples', 'Milk', 'Pasta', 'Cheese Cubes', 'Coke Zero'];
//const itemsBought = ['Cheese Cubes', 'Pasta', 'Apples'];
const itemsBought = ['Cheese Cubes', 'Pasta', 'Milk', 'Coke Zero', 'Apples'];


const hasSameContents = (arrA, arrB) => {
    const stringA = arrA.map((el) => JSON.stringify(el));
    const stringB = arrB.map((el) => JSON.stringify(el));
   
    return [
      arrA.length === arrB.length,
      ...stringA.map((el) => stringB.includes(el)),
      ...stringB.map((el) => stringA.includes(el)),
    ].every((el) => el);
};

console.log(
  hasSameContents(shoppingList, itemsBought)
    ? 'All items bought'
    : 'Items missing...'
);
