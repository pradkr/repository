'use strict';

const coords = [
  [
    [2, 5],
    [6, 4],
  ],
  [
    [3, 2],
    [5, 2],
  ],
  [
    [5, 12],
    [15, 3],
  ],
  [
    [4, 12],
    [13, 5],
  ],
];

const calcDistance = ([x1, y1], [x2, y2]) =>
  Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(5));

//const oneLevel = coords.flat(2);
//console.log(oneLevel);

const findEven = coords.flat(2).filter((elem) => elem%2===0);
const computeDistance = coords.flatMap(([p1,p2])=>calcDistance(p1,p2));

console.log(`Even Coordinates: ${findEven}`);
console.log(`Distance between points: ${computeDistance}`);


//const numbers = [1,[2,3],[4,[5,[6,[7,8]]]]]
//const flattenedArray = numbers.flat(4)
//console.log(flattenedArray)